import { ReactNode } from "react";

export default function InfoCard({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="panel cursor-hover rounded-lg p-6 transition-colors hover:border-matrix/30">
      <p className="mb-4 font-mono text-[13px] text-matrix">// {label}</p>
      {children}
    </div>
  );
}