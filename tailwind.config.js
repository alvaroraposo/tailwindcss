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
    screens: {
      sm: "600px",
      md: "700px",
      lg: "900px",
      xl: "1400px",
    },
    colors: {
      indigo: {
        light: "#b3bcf5",
        DEFAULT: "#5c6ac4",
        dark: "#202e78",
      },
    },
    spacing: {
      1: "0.35rem",
      2: "0.75rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
