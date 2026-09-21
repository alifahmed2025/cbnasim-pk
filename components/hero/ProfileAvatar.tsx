const GLYPHS = ["0", "1", "アイ", "ウ", "Δ", "#", "01", "{}", "Ξ", "カ", "/>", "1"];

/**
 * Positions `count` small glyph spans evenly around the ring, each with its
 * own fall-animation delay so the ring never looks uniform / mechanical.
 */
function ringGlyphs(count: number) {
  return Array.from({ length: count }).map((_, i) => {
    const angle = (360 / count) * i;
    const glyph = GLYPHS[i % GLYPHS.length];
    const delay = (i % 6) * 0.35;
    return { angle, glyph, delay, key: i };
  });
}

export default function ProfileAvatar({
  src,
  alt,
  size = 176,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  const padding = 34; // room for the ring + glyphs outside the photo
  const wrapperSize = size + padding * 2;
  const glyphRadius = size / 2 + 16;
  const glyphs = ringGlyphs(14);

  return (
    <div
      className="relative mx-auto shrink-0"
      style={{ width: wrapperSize, height: wrapperSize }}
    >
      {/* soft pulsing glow behind everything */}
      <div
        aria-hidden="true"
        className="animate-glow-pulse absolute inset-0 rounded-full bg-matrix/35 blur-2xl"
      />

      {/* falling matrix glyphs ringed around the avatar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-[11px] font-semibold text-matrix"
      >
        {glyphs.map((g) => (
          <span
            key={g.key}
            className="absolute"
            style={{
              transform: `rotate(${g.angle}deg) translateY(-${glyphRadius}px)`,
              transformOrigin: "center",
            }}
          >
            <span
              className="animate-[glyph-fall_2.6s_ease-in-out_infinite] inline-block drop-shadow-[0_0_6px_rgba(57,255,122,0.85)]"
              style={{ animationDelay: `${g.delay}s` }}
            >
              {g.glyph}
            </span>
          </span>
        ))}
      </div>

      {/* rotating dashed neon rings — one clockwise, one counter */}
      <div
        aria-hidden="true"
        className="animate-spin-slow absolute rounded-full border-2 border-dashed border-matrix/55"
        style={{ inset: 10 }}
      />
      <div
        aria-hidden="true"
        className="animate-spin-slow-reverse absolute rounded-full border border-matrix/25"
        style={{ inset: 20 }}
      />

      {/* the photo itself, centered */}
      <div
        className="absolute overflow-hidden rounded-full border-2 border-matrix/80 bg-panel shadow-[0_0_28px_6px_rgba(57,255,122,0.32)]"
        style={{
          width: size,
          height: size,
          top: padding,
          left: padding,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
        {/* thin scanline sheen across the photo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-matrix/10 via-transparent to-transparent"
        />
      </div>
    </div>
  );
}
