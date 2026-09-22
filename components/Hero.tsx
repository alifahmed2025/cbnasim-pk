import Link from "next/link";
import AnimatedTerminal from "@/components/terminal/AnimatedTerminal";
import ProfileAvatar from "@/components/hero/ProfileAvatar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-48"
    >
      {/* ===== MOBILE-FIRST base: everything below is the small-screen order.
          `lg:` classes further down only kick in on large screens. ===== */}

      <div>
        <div className="cursor-hover mb-6 inline-flex items-center gap-2 rounded-full border border-matrix/30 bg-matrix/5 px-3 py-1 text-[12px] text-matrix">
          <span className="h-1.5 w-1.5 rounded-full bg-matrix shadow-[0_0_8px_2px_rgba(57,255,122,0.7)]" />
          Available for engagements — Strike Force @ Yogosha
        </div>

        {/* photo: centered, top of the content — mobile default.
            hidden again once the two-column desktop layout takes over (lg:hidden) */}
        <div className="mb-6 lg:hidden">
          <ProfileAvatar src="/Nasim.jpeg" alt="Md Nasim pk" size={190} />
        </div>

        {/* terminal-style text: sits directly below the photo — mobile default */}
        <p className="mb-3 text-[13px] text-ash">$ ./introduce --me</p>

        <h1 className="text-glow text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
          Md Nasim pk
        </h1>
        <p className="mt-2 flex items-center text-2xl font-semibold text-matrix sm:text-3xl">
          aka #p.Nasim
          <span className="ml-1 inline-block h-[1.1em] w-[0.5ch] animate-blink bg-matrix align-middle" />
        </p>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ash">
          Offensive security researcher focused on{" "}
          <span className="font-semibold text-white">Penetration Testing</span>,{" "}
          <span className="font-semibold text-white">Ethical Hacking</span>{" "}
          and{" "}
          <span className="font-semibold text-white">
            Vulnerability Discovery
          </span>
          . I break things so you don&apos;t have to, then help you fix them.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="cursor-hover rounded-md bg-matrix px-5 py-2.5 text-[13px] font-semibold text-void transition-transform hover:-translate-y-0.5"
          >
            ./view_projects.sh
          </Link>
          <Link
            href="/contact"
            className="cursor-hover rounded-md border border-line px-5 py-2.5 text-[13px] text-white transition-colors hover:border-matrix/50 hover:text-matrix"
          >
            ./hire_me.sh
          </Link>
          <a
            href="/nasim-pk.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover rounded-md border border-line px-5 py-2.5 text-[13px] text-white transition-colors hover:border-matrix/50 hover:text-matrix"
          >
            cat nasim_pk.pdf
          </a>
        </div>
      </div>

      {/* ===== lg (desktop) only: second column with a smaller avatar + terminal.
          Below `lg`, this whole block just stacks under the text above. ===== */}
      <div className="flex flex-col items-center gap-8 lg:items-end">
        <div className="hidden lg:block">
          <ProfileAvatar src="/Nasim.jpeg" alt="Md Nasim pk" size={150} />
        </div>
        <div className="w-full">
          <AnimatedTerminal header="root@#p.Nasim: ~/recon" />
        </div>
      </div>
    </section>
  );
}
