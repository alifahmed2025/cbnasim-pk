"use client";

import { useEffect, useRef, useState } from "react";

type Line = { text: string; className: string };

const TARGETS = ["target.io", "10.10.14.22", "api.staging.io", "corp-vpn.net"];
const CVES = [
  "CVE-2024-3400",
  "CVE-2024-21762",
  "CVE-2024-27198",
  "CVE-2024-6387",
];

function classify(line: string): string {
  if (line.startsWith("$")) return "text-white";
  if (line.startsWith("[+]")) return "text-matrix";
  if (line.startsWith("[!]")) return "text-yellow-400";
  return "text-ash";
}

// Builds one fresh "run" of commands each loop, with a random target/CVE
// swapped in so the terminal never plays back the exact same script twice.
function buildScript(): string[] {
  const target = TARGETS[Math.floor(Math.random() * TARGETS.length)];
  const cve = CVES[Math.floor(Math.random() * CVES.length)];
  return [
    `$ nmap -sV -T4 ${target}`,
    "PORT    STATE  SERVICE",
    "22/tcp  open   ssh",
    "443/tcp open   https",
    `$ searching for ${cve}...`,
    "[+] Endpoint vulnerable to SSRF",
    "$ python3 exploit.py --target host",
    "[+] Shell obtained: uid=0(root)",
    "$ whoami && hostname",
    "root  prod-web-01",
    "$ echo 'access logged & reported'",
  ];
}

/**
 * A self-looping typewriter terminal: types each line out, pauses briefly on
 * completed lines (longer after "[+]" success lines), keeps a scrolling log
 * capped to a max number of visible rows, then starts a fresh randomized
 * script. Pure hooks/timeouts — no extra dependencies.
 */
export default function AnimatedTerminal({
  header = "root@#p.nasim: ~/recon",
  maxLines = 9,
}: {
  header?: string;
  maxLines?: number;
}) {
  const [history, setHistory] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function run() {
      while (mounted.current) {
        const script = buildScript();

        for (const line of script) {
          if (!mounted.current) return;
          const className = classify(line);

          // type it out character by character
          let typed = "";
          for (const char of line) {
            if (!mounted.current) return;
            typed += char;
            setTyping(typed);
            await sleep(14 + Math.random() * 18);
          }

          // commit the finished line to history, capped to maxLines
          setHistory((prev) => {
            const next = [...prev, { text: line, className }];
            return next.length > maxLines ? next.slice(-maxLines) : next;
          });
          setTyping("");

          const pause = line.startsWith("[+]")
            ? 550
            : line.startsWith("$")
            ? 200
            : 260;
          await sleep(pause);
        }

        // brief hold before the whole log clears and a new run starts
        await sleep(1200);
        if (!mounted.current) return;
        setHistory([]);
      }
    }

    run();
    return () => {
      mounted.current = false;
    };
  }, [maxLines]);

  // keep the log pinned to the bottom as new lines arrive
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, typing]);

  return (
    <div className="panel border-glow relative rounded-xl p-4">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-matrix/70" />
        <span className="ml-2 text-[11px] text-ash">{header}</span>
      </div>

      <div
        ref={scrollRef}
        className="h-[210px] space-y-1.5 overflow-hidden font-mono text-[12.5px] leading-relaxed sm:h-[230px]"
      >
        {history.map((line, i) => (
          <p key={i} className={line.className}>
            {line.text}
          </p>
        ))}
        <p className={classify(typing)}>
          {typing}
          <span className="ml-0.5 inline-block h-[1em] w-[0.5ch] animate-blink bg-matrix align-middle" />
        </p>
      </div>
    </div>
  );
}