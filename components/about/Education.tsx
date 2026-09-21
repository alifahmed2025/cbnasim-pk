import InfoCard from "./InfoCard";

const EDUCATION = [
  {
    degree: "Diploma in Computer Science & Technology",
    org: "Rajshahi Polytechnic Institute",
    range: "Feb 2022 — Present",
  },
];

export default function Education() {
  return (
    <InfoCard label="education">
      <div className="space-y-5">
        {EDUCATION.map((edu) => (
          <div
            key={edu.degree}
            className="flex items-start justify-between gap-4 border-l-2 border-matrix/30 pl-4"
          >
            <div>
              <p className="text-[14px] font-semibold text-white">
                {edu.degree}
              </p>
              <p className="mt-0.5 text-[12.5px] text-ash">{edu.org}</p>
            </div>
            <p className="shrink-0 whitespace-nowrap text-[11.5px] text-ash">
              {edu.range}
            </p>
          </div>
        ))}
      </div>
    </InfoCard>
  );
}