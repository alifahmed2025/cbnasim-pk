const CERTS = [
  // "CPENT",
  // "LPT",
  // "CRTE",
  // "CAPenX",
  // "BSCP",
  // "ASCP",
  // "CRTeamer",
  // "CRTA",
  // "AD-RTS",
  // "MCRTA",
  // "CNPen",
  // "CAPen",
  // "CRSA",
  // "ACP",
  // "PT1",
  // "ISO 27001 LA",
  // "CCSP-AWS",
  // "CNSP",
  // "CAP",
  "NONE",
];

export default function Certifications() {
  return (
    <section id="certs" className="mx-auto max-w-7xl px-6 pb-24">
      <p className="mb-4 text-[13px] text-ash">$ ls ./certifications/</p>
      <div className="flex flex-wrap gap-2">
        {CERTS.map((cert) => (
          <span
            key={cert}
            className="cursor-hover rounded border border-line bg-panel px-3 py-1.5 text-[11.5px] text-ash transition-colors hover:border-matrix/40 hover:text-matrix"
          >
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}
