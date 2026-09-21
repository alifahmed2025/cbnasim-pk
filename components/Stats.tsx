const STATS = [
  { value: "0+", label: "CVE EXPLOITS PUBLISHED" },
  { value: "0+", label: "CERTIFICATIONS" },
  { value: "#0", label: "HACKTHEBOX BD RANK" },
  { value: "0+", label: "CTF WINS" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="panel cursor-hover rounded-lg px-5 py-5 transition-colors hover:border-matrix/40"
          >
            <p className="text-glow text-3xl font-bold text-matrix">
              {s.value}
            </p>
            <p className="mt-1 text-[11px] tracking-wide text-ash">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
