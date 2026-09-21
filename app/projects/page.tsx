import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EngagementCard from "@/components/projects/EngagementCard";
import ExploitCard from "@/components/projects/ExploitCard";

// const ENGAGEMENTS = [
//   {
//     path: "~/infinitytix.md",
//     title: "InfinityTix",
//     description:
//       "Independently designed and built a full-stack event ticketing platform covering the complete user journey, including Google Oauth, OTP verification, SSLCommerz based automated payments, digital wallet ticket delivery, event organization and management, and ticket scanning for entry validation.",
//     tags: ["TypeScript", "PostgreSQL", "SupaBase"],
//   },
//   {
//     path: "~/anti_ctfd.md",
//     title: "Anti-CTFd",
//     description:
//       "Engineered a containerized CTF (Capture The Flag) environment using Python and Docker, designed to eliminate flag sharing between competing teams by dynamically generating and injecting unique per-team flags into isolated challenge instances, ensuring fair scoring and preventing collusion during live competitions.",
//     tags: ["Python", "Docker", "Web"],
//   },
//   {
//     path: "~/ctfd_namesync.md",
//     title: "CTFd NameSync",
//     description:
//       "Developed a custom CTFd plugin in Python that bridges the CTFd platform with Discord, automating participant identity verification, syncing Discord nicknames with corresponding CTFd usernames in real time, and automatically assigning server roles based on registration and team status, streamlining competition management for organizers.",
//     tags: ["Python", "Backend", "Bot"],
//   },
// ];

// const EXPLOITS = [
//   {
//     cve: "CVE-2023-38646",
//     title: "Metabase Pre-auth RCE",
//     lang: "Python",
//     stars: 15,
//   },
//   {
//     cve: "CVE-2023-49070",
//     title: "Apache OFBiz Pre-auth RCE",
//     lang: "Python",
//     stars: 1,
//   },
//   {
//     cve: "CVE-2022-22965",
//     title: "Spring4Shell RCE",
//     lang: "Python",
//     stars: 3,
//   },
//   {
//     cve: "CVE-2021-41349",
//     title: "Microsoft Exchange Server Spoofing",
//     lang: "HTML",
//     stars: 5,
//   },
// ];

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

<div className="flex-1">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-36 sm:pt-40">
        <p className="mb-3 font-mono text-[13px] text-matrix">
          $ ls ./projects/
       </p>
        <h1 className="text-glow text-3xl font-bold text-white sm:text-4xl">
          Projects &amp; engagements
        </h1>
        {/* <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-ash">
          A selection of offensive security work, including client
          engagements and open-source exploits published for disclosed
          CVEs.
        </p>  */}
      </section>

      {/* <section id="projects" className="mx-auto max-w-7xl px-6 pb-16">
        <p className="mb-4 font-mono text-[13px] text-matrix">
          // engagements
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {ENGAGEMENTS.map((item) => (
            <EngagementCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="mb-4 font-mono text-[13px] text-matrix">
          // published CVE exploits
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {EXPLOITS.map((item) => (
            <ExploitCard key={item.cve} {...item} />
          ))}
        </div>
      </section> */}

      {/* <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="panel rounded-lg px-6 py-5 text-center text-[13.5px] text-ash">
          More research and write-ups on{" "}
          <a
            href="https://blog.0xrobiul.me"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover font-semibold text-matrix hover:underline"
          >
            blog.#cNasim.me
          </a>{" "}
          covering Bug Bounty, CSRF, RCE, Broken Link Hijacking and CTF
          walkthroughs.
        </div>
      </section> */}
      </div>

      <Footer />
    </main>
  );
}
