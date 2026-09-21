export default function EngagementCard({
  path,
  title,
  description,
  tags,
}: {
  path: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="panel cursor-hover flex h-full flex-col rounded-lg p-6 transition-colors hover:border-matrix/30">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-matrix/70" />
        <span className="ml-2 font-mono text-[11px] text-ash">{path}</span>
      </div>

      <h3 className="mb-3 text-[16px] font-semibold text-white">{title}</h3>
      <p className="flex-1 text-[13px] leading-relaxed text-ash">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-line bg-void/60 px-2 py-1 text-[10.5px] text-ash"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}