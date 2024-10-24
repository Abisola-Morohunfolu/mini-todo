/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "left-solid": "9px 2px 13px -3px rgba(0, 0, 0, 0.59)",
      },
      colors: {
        "btn-red": "var(--color-red)",
        "btn-blue": "var(--color-blue)",
      },
    },
  },
  plugins: [],
};
