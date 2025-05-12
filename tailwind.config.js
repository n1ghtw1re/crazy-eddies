/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0A0A0A',
        'cyber-dark': '#120458',
        'cyber-blue': '#00FFFF',
        'cyber-pink': '#FF00FF',
        'cyber-green': '#00FF00',
        'cyber-yellow': '#FFFF00',
        'cyber-red': '#FF0000',
        'cyber-orange': '#FF6600',
        'cyber-purple': '#9900FF',
      },
      fontFamily: {
        'glitch': ['VT323', 'monospace'],
        'display': ['Orbitron', 'sans-serif'],
        'cyber': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'blink': 'blink 1.5s infinite',
        'scanline': 'scanline 5s linear infinite',
        'color-cycle': 'color-cycle 5s linear infinite',
        'flicker': 'flicker 0.5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'color-cycle': {
          '0%, 100%': { color: '#00FFFF' },
          '25%': { color: '#FF00FF' },
          '50%': { color: '#00FF00' },
          '75%': { color: '#FFFF00' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};