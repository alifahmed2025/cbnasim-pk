const SERVICES = [
  {
    title: "Penetration Testing",
    desc: "Web, API, network and cloud security testing through manual and automated methods, including prioritized findings, PoCs, and remediation steps.",
    tags: ["Burp Suite", "Nessus", "OWASP"],
  },
  {
    title: "Red Team Engagements",
    desc: "Full-scope adversary emulation, Active Directory exploitation and post-exploitation tradecraft.",
    tags: ["Cobalt Strike", "AD", "TTPs"],
  },
  {
    title: "Vulnerability Research",
    desc: "CVE discovery and exploit development. Published exploits for Metabase, Spring4Shell, Apache OFBiz and more.",
    tags: ["CVE", "PoC", "Exploit Dev"],
  },
];

export default function WhatIDo() {
  return (
    <section id="about" className="border-t border-line bg-panel/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 text-[13px] text-ash">$ cat services.md</p>
        <h2 className="text-glow mb-12 text-3xl font-bold text-white sm:text-4xl">
          What I do
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="panel cursor-hover group rounded-lg p-6 transition-colors hover:border-matrix/40"
            >
              <h3 className="mb-3 text-[15px] font-semibold text-matrix">
                {s.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-ash">
                {s.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-line bg-void/60 px-2 py-1 text-[10.5px] text-ash group-hover:border-matrix/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
