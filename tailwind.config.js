/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        "sidebar-icon": "30%",
        "sidebar-title": "70%"
      },
    },
  },
  plugins: [],
};
