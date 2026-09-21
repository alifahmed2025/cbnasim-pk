export default function AboutIntro() {
  return (
    <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
      {/* avatar: ছোট স্ক্রিনে ছোট, sm+ থেকে বড় হয় */}
      <div className="h-[96px] w-[96px] shrink-0 overflow-hidden rounded-full border-2 border-matrix/50 bg-panel shadow-[0_0_24px_5px_rgba(57,255,122,0.16)] sm:h-[130px] sm:w-[130px] sm:shadow-[0_0_28px_6px_rgba(57,255,122,0.18)]">
        <img
          src="/nasimpk.jpeg"
          alt="Md Nasim pk"
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <p className="mb-2 font-mono text-[12px] text-matrix sm:text-[13px]">
          $ cat about.md
        </p>
        <h1 className="text-glow text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          About me
        </h1>
        <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-ash sm:text-[14px]">
          I&apos;m Md Nasim pk (#p.Nasim), a passionate cybersecurity
          researcher based in Dhaka, Bangladesh. I focus on offensive
          security, contribute to bug bounty platforms such as HackerOne,
          Intigriti, and Bugcrowd, and serve as a Strike Force Member at
          Yogosha.
        </p>
      </div>
    </div>
  );
}