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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
