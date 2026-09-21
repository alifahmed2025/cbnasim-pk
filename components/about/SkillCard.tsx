import InfoCard from "./InfoCard";

export default function SkillCard({
  label,
  skills,
}: {
  label: string;
  skills: string[];
}) {
  return (
    <InfoCard label={label}>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-line bg-void/60 px-2.5 py-1.5 text-[11.5px] text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </InfoCard>
  );
}