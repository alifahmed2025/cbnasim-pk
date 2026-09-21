export default function CertCard({
  code,
  year,
  title,
  issuer,
  href = "#",
}: {
  code: string;
  year: string;
  title: string;
  issuer: string;
  href?: string;
}) {
  return (
    <div className="panel cursor-hover flex flex-col rounded-lg p-5 transition-colors hover:border-matrix/40">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="rounded border border-matrix/40 px-2 py-1 text-[11px] font-semibold text-matrix">
          {code}
        </span>
        <span className="text-[11px] text-ash">{year}</span>
      </div>

      <h3 className="text-[14px] font-semibold leading-snug text-white">
        {title}
      </h3>
      <p className="mt-1 text-[12px] text-ash">{issuer}</p>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="cursor-hover mt-4 inline-flex items-center gap-1 text-[12px] font-medium text-matrix hover:underline"
      >
        view certificate <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}