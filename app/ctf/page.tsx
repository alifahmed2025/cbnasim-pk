import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AchievementCard from "@/components/ctf/AchievementCard";

const ACHIEVEMENTS = [
  { icon: "🥇", year: "2025", title: "1st in Bangladesh", subtitle: "HackTheBox" },
  { icon: "🥈", year: "2024", title: "2nd in Bangladesh", subtitle: "TryHackMe" },
  { icon: "🌍", year: "–", title: "7th Globally", subtitle: "Hacker101 CTF" },
  { icon: "🏆", year: "2025", title: "Corporate Champion", subtitle: "BSC ICT Fest CTF" },
  { icon: "🏆", year: "2022", title: "Champion", subtitle: "Spooky CTF" },
  { icon: "🥉", year: "2025", title: "2nd Runner-Up", subtitle: "BTRC Hackathon" },
  { icon: "🥉", year: "2024", title: "2nd Runner-Up", subtitle: "National Skills Competition" },
  { icon: "🥉", year: "2024", title: "2nd Runner-Up", subtitle: "Flag Fest" },
  {
    icon: "🥉",
    year: "2023",
    title: "2nd Runner-Up",
    subtitle: "FlagHunt",
    highlighted: true,
  },
  { icon: "🥉", year: "–", title: "Leading Position", subtitle: "20+ other CTFs" },
];

export default function CtfPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1">
        <section className="mx-auto max-w-7xl  px-6 pb-10 pt-36 sm:pt-40">
          <p className="mb-3 font-mono text-[13px] text-matrix">
            $ cat ctf_achievements.log
          </p>
          <h1 className="text-glow text-3xl font-bold text-white sm:text-4xl">
            CTF achievements
          </h1>
          {/* <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-ash">
            Active competitor and organizer across local and international
            Capture the Flag events, including LeetCon, DIUCSC-01, CCAF CTF,
            and EWU CTF.
          </p> */}
        </section>
        {/* 
        <section id="ctf" className="mx-auto max-w-7xl px-6 pb-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.map((item) => (
              <AchievementCard key={item.title + item.subtitle} {...item} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="panel rounded-lg p-6">
            <p className="mb-2 font-mono text-[13px] text-matrix">
              // also organized
            </p>
            <p className="text-[13.5px] leading-relaxed text-ash">
              Helped run challenges and infrastructure for{" "}
              <span className="font-semibold text-white">LeetCon</span>,{" "}
              <span className="font-semibold text-white">DIUCSC-01 CTF</span>,{" "}
              <span className="font-semibold text-white">CCAF CTF</span>,{" "}
              <span className="font-semibold text-white">EWU CTF</span> and
              more.
            </p>
          </div>
        </section> */}
      </div>

      <Footer />
    </main>
  );
}