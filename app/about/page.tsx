import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutIntro from "@/components/about/AboutIntro";
import Background from "@/components/about/Background";
import Experience from "@/components/about/Experience";
import Education from "@/components/about/Education";
import SkillCard from "@/components/about/SkillCard";

const SKILL_GROUPS = [
  {
    label: "Penetration Testing",
    skills: [
      "OWASP Top 10",
      "Burp Suite Pro",
      "Web App Security",
      "API (REST/GraphQL)",
      "Network Pentest",
      "Privilege Escalation",
    ],
  },
  // {
  //   label: "Red Teaming",
  //   skills: [
  //     "Active Directory",
  //     "Cobalt Strike",
  //     "Adversary Emulation",
  //     "C2 Infrastructure",
  //     "Phishing",
  //     "Lateral Movement",
  //   ],
  // },
  // {
  //   label: "Cloud & Infra",
  //   skills: [
  //     "AWS Security",
  //     "Multi-Cloud Red Team",
  //     "ISO 27001",
  //     "Hardening",
  //     "Network Config Review",
  //   ],
  // },
  {
    label: "Tooling",
    skills: ["Nmap", "Nessus", "Wireshark", "Metasploit", "Python", "Bash","Burp suite"],
  },
];

export default function AboutPage() {
  return (
    <main>
      <Header />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-40">
        <AboutIntro />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* left column */}
          <div className="space-y-5">
            <Background />
            <Experience />
            <Education />
          </div>

          {/* right column */}
          <div className="space-y-5">
            {SKILL_GROUPS.map((group) => (
              <SkillCard
                key={group.label}
                label={group.label}
                skills={group.skills}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}