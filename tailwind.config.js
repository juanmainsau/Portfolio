/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",  // Escanea TODOS los archivos HTML
    "./src/**/*.js"  // Escanea todos los JS
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#333333',
        'darker-bg': '#222222',
        'light-bg': '#f4f4f4',
        'header-bg': '#e7e7ed',
        'text-dark': '#0f0f0a'
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: true
  }
}