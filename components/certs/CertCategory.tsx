import CertCard from "./CertCard";

export interface Cert {
  code: string;
  year: string;
  title: string;
  issuer: string;
  href?: string;
}

export default function CertCategory({
  label,
  certs,
}: {
  label: string;
  certs: Cert[];
}) {
  return (
    <div>
      <p className="mb-4 font-mono text-[13px] text-matrix">// {label}</p>
      <div className="grid gap-4 md:grid-cols-3">
        {certs.map((cert) => (
          <CertCard key={cert.code + cert.title} {...cert} />
        ))}
      </div>
    </div>
  );
}