import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050807",
        panel: "#0a100d",
        line: "#16241c",
        matrix: {
          DEFAULT: "#39ff7a",
          dim: "#1f8f4a",
          bright: "#8fffb0",
        },
        ash: "#7c9285",
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "IBM Plex Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        rise: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
