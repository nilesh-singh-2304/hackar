import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["dim"],
  },
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '140' : '36rem',
        '149' : '40rem',
        '150' : '40rem'
      },
      minHeight: {
        '150' : '40rem'
      },
      minWidth: {
        '150' : '50rem'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
