module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' }, // Start with no width
          '50%': { width: '100%' }, // Expand to full width
          '100%': { width: '0' }, // Reset width for the next loop
        },
        blinkCursor: {
          from: { 'border-right-color': 'transparent' }, // Hide cursor
          to: { 'border-right-color': 'white' }, // Show cursor
        },
      },
      animation: {
        typewriter: 'typewriter 5s steps(30) infinite', // Adjust duration and steps
        blinkCursor: 'blinkCursor 0.75s infinite', // Blinking cursor effect
      },
    },
  },
  plugins: [],
};
