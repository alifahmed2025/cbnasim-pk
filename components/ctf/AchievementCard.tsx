export default function AchievementCard({
  icon,
  year,
  title,
  subtitle,
  highlighted = false,
}: {
  icon: string;
  year: string;
  title: string;
  subtitle: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`panel cursor-hover rounded-lg p-5 transition-colors ${
        highlighted
          ? "border-matrix/60 shadow-[0_0_24px_2px_rgba(57,255,122,0.12)]"
          : "hover:border-matrix/30"
      }`}
    >
      <div className="mb-4 flex items-start justify-between">
        <span className="text-2xl leading-none">{icon}</span>
        <span className="text-[11px] text-ash">{year}</span>
      </div>

      <p className="text-[14px] font-semibold text-matrix">{title}</p>
      <p className="mt-1 text-[12.5px] text-ash">{subtitle}</p>
    </div>
  );
}