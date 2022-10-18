/** @type {import('tailwindcss').Config} */
module.exports = {
  // Just In Time speeds up build time
  // mode: 'jit',
  // "purge" will remove unused styles
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
