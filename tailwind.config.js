const plugin = require("tailwindcss/plugin");
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
    customPlugin: ["responsive", "hover"],
    extend: {
      backgroundColor: ["active"],
      textColor: ["visited"],
    },
  },
  prefix: "dt-",
  plugins: [
    plugin(({ addBase, theme }) => {
      const heading = {
        h1: { fontSize: theme("fontSize.xl") },
        h2: { fontSize: theme("spacing.6") },
        h3: { fontSize: "15px" },
      };
      addBase(heading);
    }),
  ],
};
