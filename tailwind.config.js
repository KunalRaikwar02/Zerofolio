/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#101318',
      },
      fontFamily: {
        display: ['Space Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
