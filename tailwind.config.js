module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // This configuration will prefix all of your utilities with the given selector,
  // effectively increasing their specificity without actually making them !important.
  // important: "#important",

  // If you want to support toggling dark mode manually instead of relying on the operating system preference,
  // use the class strategy instead of the media strategy:
  darkMode: "class",
  
  theme: {
    extend: {},
  },
  plugins: [],
};
