const plugin = require("tailwindcss/plugin");
module.exports = {
  //npx tailwindcss init generates this file
  // npm install postcss autoprefixer postcss-cli
  // npx tailwindcss init -p
  /* Removes unused styles from the production files */
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  presets: [require("./preset/tailwind.preset")],
};
