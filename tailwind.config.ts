import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mine: "1187px",
    },
    extend: {
      colors: {
        primary: {
          50: "#e6f1fe",
          100: "#b2d2fd",
          200: "#8cbdfc",
          300: "#589ffb",
          400: "#388cfa",
          500: "#066ff9",
          600: "#0565e3",
          700: "#044fb1",
          800: "#033d89",
          900: "#032f69",
        },
        neutral: {
          50: "#e7e7e7",
          100: "#b5b5b5",
          200: "#919191",
          300: "#5f5f5f",
          400: "#404040",
          500: "#101010",
          600: "#0f0f0f",
          700: "#0b0b0b",
          800: "#090909",
          900: "#070707",
        },
        warning: {
          50: "#fdf9e6",
          100: "#f8ecb0",
          200: "#f5e38a",
          300: "#f0d754",
          400: "#edcf33",
          500: "#e9c300",
          600: "#d4b100",
          700: "#a58a00",
          800: "#806b00",
          900: "#625200",
        },
        error: {
          50: "#f7e6e9",
          100: "#e7b0ba",
          200: "#db8a98",
          300: "#ca546a",
          400: "#c0334d",
          500: "#b00020",
          600: "#a0001d",
          700: "#7d0017",
          800: "#610012",
          900: "#4a000d",
        },
      },

      lineHeight: {
        150: "150%",
        180: "180%",
        200: "200%",
      },

      spacing: {
        18: "clamp(12px,1.2vw,18px)",
        45: "clamp(30px,2.8vw,45px)",
        50: "clamp(32px,3.1vw,50px)",
        56: "clamp(36px,3.6vw,56px)",
        70: "clamp(40px,4.4vw,70px)",
        71: "clamp(48px,4.5vw,71px)",
        74: "clamp(46px,4.63vw,74px)",
        81: "clamp(56px,4.72vw,81px)",
        90: "clamp(48px,5.6vw,90px)",
        96: "clamp(50px,6vw,96px)",
        115: "clamp(60px,7.2vw,115px)",
        144: "clamp(90px,9vw,144px)",
        140: "clamp(90px,8.6vw,140px)",
        154: "clamp(110px,9.8vw,154px)",
        198: "clamp(78px,12.4vw,198px)",
      },
    },

    fontFamily: {
      jakarta: ['"Plus Jakarta Sans"', "ui-sans-serif"],
      sora: ["Sora", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
