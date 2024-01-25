/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**.{ts,tsx}",
    "./src/components/**/**.{ts,tsx}",
    "./src/contexts/**/**.{ts,tsx}",
    "./src/styles/**.*",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        "main-bg": "#fafbfb",
        "main-dark-bg": "#20232a",
        "secondary-dark-bg": "#33373e",
        "light-gray": "#f7f7f7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
