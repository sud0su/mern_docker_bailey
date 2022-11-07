/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // backgroundColor: {
      //   primary: {
      //     lighter: 'var(--color-bg-primary)'
      //   },
      //   secondary: 'var(--color-bg-secondary)',
      // },
      // textColor: {
      //   accent: 'var(--color-text-accent)',
      //   primary: 'var(--color-text-primary)',
      //   secondary: 'var(--color-text-secondary)',
      // },
    },
  },
  plugins: [],
}
