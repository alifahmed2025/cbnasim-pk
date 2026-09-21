import InfoCard from "./InfoCard";

export default function Background() {
  return (
    <InfoCard label="background">
      <div className="space-y-4 text-[14px] leading-relaxed text-ash">
        <p>
          I thrive on uncovering security weaknesses in real-world systems —
          web applications, APIs, networks, cloud and Active Directory
          environments. Beyond breaking things, I write detailed reports
          with reproducible PoCs and actionable remediation guidance so
          teams can ship secure software.
        </p>
        {/* <p>
          Ranked <span className="font-semibold text-matrix">#1 in Bangladesh</span> on
          HackTheBox and previously{" "}
          <span className="font-semibold text-matrix">#2 in Bangladesh</span> on
          TryHackMe. I also placed{" "}
          <span className="font-semibold text-matrix">7th globally</span> in
          Hacker101 CTF and actively organize and play CTFs across the
          country.
        </p> */}
      </div>
    </InfoCard>
  );
}