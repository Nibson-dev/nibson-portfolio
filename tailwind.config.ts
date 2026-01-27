import type { Config } from "tailwindcss";

const config: Config = {
  // AQUI MUDOU: removemos o "src/" dos caminhos
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#1d1d1f",
        primary: "#f5f5f7",
        secondary: "#86868b",
        accent: "#2997ff",
      },
      backgroundImage: {
        'spotlight': 'radial-gradient(circle at center, #2a2a2a 0%, transparent 70%)',
        'metal-gradient': 'linear-gradient(180deg, #f5f5f7 0%, #86868b 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;