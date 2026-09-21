"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { label: "~/home", href: "/" },
  { label: "~/about", href: "/about" },
  { label: "~/projects", href: "/projects" },
  { label: "~/certs", href: "/certs" },
  { label: "~/ctf", href: "/ctf" },
  { label: "~/contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const scale = useRef(1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const bg = bgRef.current;
    if (!header || !bg) return;

    const onMove = (e: MouseEvent) => {
      const rect = header.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      const scrollZoom = Math.min(window.scrollY / 400, 1) * 0.06;
      const targetScale = 1 + scrollZoom;
      scale.current += (targetScale - scale.current) * 0.08;

      const shiftX = (mouse.current.x - 0.5) * 10;
      const shiftY = (mouse.current.y - 0.5) * 10;

      bg.style.transform = `scale(${(1.08 + scale.current - 1).toFixed(
        4
      )}) translate(${shiftX.toFixed(2)}px, ${shiftY.toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    // ⚠️ overflow-hidden আর এখানে নেই — এটাই ছিল bug-এর কারণ
    <header
      ref={headerRef}
      id="site-header"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${scrolled ? "border-line" : "border-transparent"
        }`}
    >
      <div
        className={`relative overflow-hidden transition-colors duration-500 ${scrolled ? "bg-void/90 backdrop-blur-md" : "bg-void/40 backdrop-blur-sm"
          }`}
      >
        <div
          ref={bgRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 origin-center bg-[radial-gradient(circle_at_30%_20%,rgba(57,255,122,0.16),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(57,255,122,0.10),transparent_55%)] will-change-transform"
        />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="cursor-hover flex items-center gap-2 text-sm text-ash"
          >
            <span className="text-matrix">root@#p.nasim</span>
            <span>:~$ whoami</span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-md border border-line bg-panel/60 p-1 md:flex">
            {NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`cursor-hover rounded px-3 py-1.5 text-[13px] transition-colors ${isActive
                      ? "bg-matrix/15 text-matrix"
                      : "text-ash hover:text-matrix"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="cursor-hover hidden rounded border border-matrix/40 px-3 py-1.5 text-[13px] text-matrix hover:bg-matrix/10 sm:block"
            >
              ./connect.sh
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="cursor-hover relative flex h-9 w-9 items-center justify-center rounded-md border border-line text-matrix md:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full bg-matrix transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : ""
                    }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-[2px] w-full bg-matrix transition-all duration-200 ${menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`absolute left-0 top-3 h-[2px] w-full bg-matrix transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : ""
                    }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* overlay backdrop — এখন header-এর overflow-hidden wrapper-এর বাইরে */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      />

      {/* slide-in mobile panel — এটাও বাইরে, তাই আর ক্লিপ হবে না */}
      <nav
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[78%] max-w-xs flex-col border-l border-line bg-void/95 backdrop-blur-md transition-transform duration-300 ease-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="font-mono text-[13px] text-ash">
            <span className="text-matrix">root</span>@menu:~$
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="cursor-hover flex h-8 w-8 items-center justify-center rounded-md border border-line text-ash hover:text-matrix"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 px-3 py-4">
          {NAV.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
                className={`cursor-hover translate-x-4 rounded-md px-4 py-3 text-[14px] opacity-0 transition-all duration-300 ${menuOpen ? "translate-x-0 opacity-100" : ""
                  } ${isActive
                    ? "bg-matrix/15 text-matrix"
                    : "text-ash hover:bg-panel hover:text-matrix"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="border-t border-line px-5 py-4">
          <Link
            href="/contact"
            className="cursor-hover mb-4 block rounded-md border border-matrix/40 px-4 py-2.5 text-center text-[13px] text-matrix hover:bg-matrix/10"
          >
            ./connect.sh
          </Link>

          <div className="flex items-center gap-1.5 rounded-md border border-line bg-panel/60 px-3 py-2.5">
            <span className="h-2 w-2 rounded-full bg-red-500/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
            <span className="h-2 w-2 rounded-full bg-matrix/70" />
            <span className="ml-2 truncate font-mono text-[11px] text-ash">
              root@#cNasim: ~/recon
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}