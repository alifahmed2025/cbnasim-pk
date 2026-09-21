export default function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="cursor-hover flex items-center justify-between rounded-md px-3 py-3 text-[13.5px] transition-colors hover:bg-matrix/10"
    >
      <span className="text-ash">
        <span className="text-white">$</span> echo{" "}
        <span className="text-white">${label}</span>
      </span>
      <span className="font-medium text-matrix">{value}</span>
    </a>
  );
}