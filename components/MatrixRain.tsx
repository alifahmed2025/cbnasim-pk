"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight canvas-based matrix rain. Runs on a single <canvas> instead of
 * per-character DOM nodes so it stays cheap on low-power devices, and pauses
 * itself when the tab is hidden or the user prefers reduced motion.
 */
export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const glyphs =
      "01アイウエオカキクケコサシスセソタチツテト日月火水木金土ΞΨΔΣ<>/#{}";
    const fontSize = 15;
    let columns = 0;
    let drops: number[] = [];
    let width = 0;
    let height = 0;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -50);
    }

    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let raf = 0;
    let visible = !document.hidden;

    function draw() {
      if (!visible) {
        raf = requestAnimationFrame(draw);
        return;
      }
      frame++;
      // throttle to ~20fps for a calmer, lighter effect
      if (frame % 3 !== 0) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx!.fillStyle = "rgba(5, 8, 7, 0.15)";
      ctx!.fillRect(0, 0, width, height);

      ctx!.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < columns; i++) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const isHead = Math.random() > 0.93;
        ctx!.fillStyle = isHead ? "#c8ffdb" : "rgba(57, 255, 122, 0.55)";
        ctx!.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      raf = requestAnimationFrame(draw);
    }

    const onVisibility = () => {
      visible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (!prefersReducedMotion) {
      raf = requestAnimationFrame(draw);
    } else {
      // Draw a single static-ish frame for reduced-motion users.
      ctx.fillStyle = "#050807";
      ctx.fillRect(0, 0, width, height);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-40"
      aria-hidden="true"
    />
  );
}
