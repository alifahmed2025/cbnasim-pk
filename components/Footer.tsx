const SOCIALS = [
  { label: "./github", href: "https://github.com" },
  { label: "./linkedin", href: "https://linkedin.com" },
  { label: "./twitter/x", href: "https://x.com" },
 // { label: "./blog", href: "#" },
 // { label: "./youtube", href: "https://www.youtube.com/" },
  { label: "./facebook", href: "https://www.facebook.com/mdmujahidali.mdmujahidali.77" },
];
export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-void/80 py-8 sm:py-6">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-5 px-6 text-ash sm:flex-row sm:justify-between sm:gap-3">
        <p className="max-w-sm text-center text-[11px] leading-relaxed sm:max-w-none sm:text-left sm:text-[12px]">
          $ echo &quot;© 2026 Md Nasim pk (#p.Nasim) | built with caffeine
          &amp; VS Code.&quot;
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] sm:justify-end sm:text-[12px]">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="cursor-hover rounded px-1 py-1 transition-colors hover:text-matrix"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}