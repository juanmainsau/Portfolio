/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#333',
        'darker-bg': '#222',
        'light-bg': '#f4f4f4',
        'header-bg': '#e7e7ed',
        'text-dark': '#0f0f0a'
      },
      backgroundImage: {
        'presentation-gradient': 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%)'
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif']
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
    'bg-dark-bg',
    'bg-darker-bg',
    'bg-light-bg',
    'bg-header-bg',
    'text-white',
    'text-dark',
    'font-prompt',
    'bg-presentation-gradient',
    'hover:scale-130',
    'rounded-15'
  ],
  plugins: []
}