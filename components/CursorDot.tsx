"use client";

import { useEffect, useRef } from "react";

/**
 * A single glowing dot that trails the pointer across the entire site
 * (including the header — there is no second/duplicate dot for it).
 * Disabled on touch devices since there is no persistent pointer there.
 */
export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onDown = () => dot.classList.add("scale-[0.55]");
    const onUp = () => dot.classList.remove("scale-[0.55]");

    const interactiveSelector =
      "a, button, input, textarea, [role='button'], .cursor-hover";

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(interactiveSelector);
      if (el) dot.classList.add("scale-[2.2]", "!bg-matrix-bright/70");
    };
    const onOut = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(interactiveSelector);
      if (el) dot.classList.remove("scale-[2.2]", "!bg-matrix-bright/70");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.2;
      pos.current.y += (target.current.y - pos.current.y) * 0.2;
      dot.style.transform = `translate3d(${pos.current.x - 9}px, ${
        pos.current.y - 9
      }px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-[18px] w-[18px] rounded-full bg-matrix/80 shadow-[0_0_18px_4px_rgba(57,255,122,0.55)] transition-transform duration-150 ease-out md:block"
    />
  );
}
