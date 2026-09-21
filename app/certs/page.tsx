import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertCategory, { Cert } from "@/components/certs/CertCategory";

// const CATEGORIES: { label: string; certs: Cert[] }[] = [
//   {
//     label: "Red Team",
//     certs: [
//       { code: "CPENT", year: "2026", title: "Certified Penetration Testing Professional", issuer: "EC-Council" },
//       { code: "LPT", year: "2026", title: "Licensed Penetration Tester Master", issuer: "EC-Council" },
//       { code: "CRTE", year: "2025", title: "Certified Red Team Expert", issuer: "Altered Security" },
//       { code: "CRTeamer", year: "2025", title: "Certified Red Teamer", issuer: "The SecOps Group" },
//       { code: "AD-RTS", year: "2025", title: "Certified Active Directory Red Team Specialist", issuer: "Cyber Warfare Labs" },
//       { code: "CRTA", year: "2025", title: "Certified Red Team Analyst", issuer: "Cyber Warfare Labs" },
//     ],
//   },
//   {
//     label: "AppSec & Web",
//     certs: [
//       { code: "CAPenX", year: "2025", title: "Certified AppSec Pentesting eXpert", issuer: "The SecOps Group" },
//       { code: "BSCP", year: "2025", title: "Burp Suite Certified Practitioner", issuer: "PortSwigger" },
//       { code: "CAPen", year: "2025", title: "Certified AppSec Pentester", issuer: "The SecOps Group" },
//       { code: "CAP", year: "2025", title: "Certified AppSec Practitioner", issuer: "The SecOps Group" },
//       { code: "PT1", year: "2023", title: "Jr. Penetration Tester", issuer: "TryHackMe" },
//     ],
//   },
//   {
//     label: "API",
//     certs: [
//       { code: "ASCP", year: "2025", title: "API Security Certified Professional", issuer: "APIsec University" },
//       { code: "CASA", year: "2025", title: "Certified API Security Analyst", issuer: "APIsec University" },
//       { code: "ACP", year: "2025", title: "APIsec Certified Practitioner", issuer: "APIsec University" },
//     ],
//   },
//   {
//     label: "Network & Cloud",
//     certs: [
//       { code: "MCRTA", year: "2024", title: "Multi-Cloud Red Team Analyst", issuer: "Cyber Warfare Labs" },
//       { code: "CNPen", year: "2024", title: "Certified Network Pentester", issuer: "The SecOps Group" },
//       { code: "CNSP", year: "2023", title: "Certified Network Security Practitioner", issuer: "The SecOps Group" },
//       { code: "CCSP-AWS", year: "2023", title: "Certified Cloud Security Practitioner — AWS", issuer: "The SecOps Group" },
//     ],
//   },
//   {
//     label: "Compliance",
//     certs: [
//       { code: "ISO 27001 LA", year: "2025", title: "ISO/IEC 27001:2022 Lead Auditor", issuer: "Mastermind Assurance" },
//       { code: "ISO 27001", year: "2024", title: "Information Security Associate", issuer: "SKILLFRONT" },
//     ],
//   },
// ];

export default function CertsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-36 sm:pt-40">
          <p className="mb-3 font-mono text-[13px] text-matrix">
            $ ls -la ./certifications/
          </p>
          <h1 className="text-glow text-3xl font-bold text-white sm:text-4xl">
            Certifications
          </h1>
          {/* <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-ash">
          Verified industry credentials across Red Teaming, Application &amp;
          API Security, Network/Cloud and Compliance.
        </p> */}
        </section>

        {/* <section id="certs" className="mx-auto max-w-7xl space-y-10 px-6 pb-24">
        {CATEGORIES.map((cat) => (
          <CertCategory key={cat.label} label={cat.label} certs={cat.certs} />
        ))}
      </section> */}
      </div>

      <Footer />
    </main>
  );
}