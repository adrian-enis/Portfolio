import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        showContent: {
          "0%": {
            opacity: "0",
            filter: "blur(20px)",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        showContent:"showContent 0.5s linear 1 forwards",
      
      },
    },
    plugins: [],
  },
};
