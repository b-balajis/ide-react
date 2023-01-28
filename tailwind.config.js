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
      extend: {
        colors: {
            paper: "#161A23",
            background: "#0D1117",
            secondary: "#F8333C",
            primary: "#1f71eb",
            "paper-secondary": "#1D2028",
            textSecondary: "#c9d1d9",
            borderPrimary: "#30363d",
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
