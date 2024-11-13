/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary011: "#323232",
        textSecondary011: "#6c6c6c",
        primary011: "#fffefe",
        secondary011: "#c9c9c9",
      },
      fontFamily: {
        stylish: ["stylish", "serif"],
        stylishBold: ["stylish-bold", "serif"],
        poppinsRegular: ["Poppins-Regular", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
        poppinsLight: ["Poppins-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
