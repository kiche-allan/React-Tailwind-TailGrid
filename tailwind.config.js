/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


"./src/**/*.{js,ts,jsx,tsx}",
"./ecommerce/*.html", "./assets/**/*.js", "./assets/**/*.ts", "./assets/**/*.jsx", "./assets/**/*.tsx", "./assets/**/*.html", "./assets/**/*.vue", "./assets/**/*.pug", "./assets/**/*.md", "./assets/**/*.svg"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
}

