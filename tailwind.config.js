/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "chef": "url('./src/assets/image/header.png')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], // You can specify the theme you want here
  },
};
