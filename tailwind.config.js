module.exports = {
  //npx tailwindcss init generates this file
  // npm install postcss autoprefixer postcss-cli
  // npx tailwindcss init -p
  /* Removes unused styles from the production files */
  mode: "jit",
  purge: ["./public/**/*.{html,js}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  /* customizes tailwind utility classes */
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        "regal-blue": "#243c5a",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
