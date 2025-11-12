module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        pillBlue: '#0ea5e9',
        pillRed: '#ef4444',
        neutralBg: '#f7f7f9'
      },
      boxShadow: {
        'pill-glow-blue': '0 6px 24px rgba(14,165,233,0.35)',
        'pill-glow-red': '0 6px 24px rgba(239,68,68,0.35)'
      }
    }
  },
  plugins: []
}
