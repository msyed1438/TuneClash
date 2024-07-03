/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: "#F7C59F",
        spaceCadet: "#2A324B",
        slateGray: "#767B91",
        frenchGray: "#C7CCDB",
        aliceBlue: "#E1E5EE",
      },
    },
  },
  plugins: [],
};
