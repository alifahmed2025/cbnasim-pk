import type { Metadata } from "next";
import "./globals.css";
import MatrixRain from "@/components/MatrixRain";
import CursorDot from "@/components/CursorDot";

export const metadata: Metadata = {
  title: "#cNasim — Md Nasim pk | Offensive Security Researcher",
  description:
    "Md Nasim pk (#cNasim) — offensive security researcher specializing in red teaming, ethical hacking and vulnerability discovery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="crt-flicker relative min-h-screen">
        <MatrixRain />
        <CursorDot />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
