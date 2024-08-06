/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Custom Font", "sans-serif"],
      },
      colors: {
        primary: "#00ABFF",
        secondary: "#171B36",
      },
    },
  },
  plugins: [],
};
