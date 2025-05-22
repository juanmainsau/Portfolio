/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#333333',       // Más específico (6 dígitos)
        'darker-bg': '#222222',     // Más específico
        'light-bg': '#f4f4f4',      // Perfecto
        'header-bg': '#e7e7ed',     // Perfecto
        'text-dark': '#0f0f0a'      // Perfecto
      },
      fontFamily: {
        sans: ['Prompt', 'sans-serif'], // Como fuente predeterminada
        prompt: ['Prompt', 'sans-serif'] // También disponible como clase
      },
      backgroundImage: {
        'presentation-gradient': 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%)'
      },
      scale: {
        130: '1.3'
      },
      borderRadius: {
        '15': '15px'
      }
    }
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(dark-bg|darker-bg|light-bg|header-bg|dark)/,
      variants: ['hover', 'focus']
    },
    'font-prompt',
    'bg-presentation-gradient',
    'hover:scale-130',
    'rounded-15'
  ],
  plugins: []
}