/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,cjs,mjs,ts,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        PoppinsFonts: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
