module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          serif: ['"Roboto Slab"', 'serif'],
          body: ['Roboto', 'sans-serif'],
      },
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
