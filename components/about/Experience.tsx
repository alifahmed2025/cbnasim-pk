import InfoCard from "./InfoCard";

const JOBS = [
  {
    role: "Junior Penetration Tester",
    org: "Byte capsuleit, Dhaka",
    range: "Sep 2026 - Present",
  }
  // {
  //   role: "Cybersecurity Engineer",
  //   org: "Blue Team Bangladesh Limited, Dhaka",
  //   range: "Feb 2024 — Aug 2024",
  // },
  // {
  //   role: "Cybersecurity Executive",
  //   org: "WHITELION Technologies Limited, Dhaka",
  //   range: "Sep 2023 — Feb 2024",
  // },
];

export default function Experience() {
  return (
    <InfoCard label="experience">
      <div className="space-y-5">
        {JOBS.map((job) => (
          <div
            key={job.role}
            className="flex items-start justify-between gap-4 border-l-2 border-matrix/30 pl-4"
          >
            <div>
              <p className="text-[14px] font-semibold text-white">
                {job.role}
              </p>
              <p className="mt-0.5 text-[12.5px] text-ash">{job.org}</p>
            </div>
            <p className="shrink-0 whitespace-nowrap text-[11.5px] text-ash">
              {job.range}
            </p>
          </div>
        ))}
      </div>
    </InfoCard>
  );
}