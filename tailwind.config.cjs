const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './frontend/index.html',
    './frontend/assets/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bg: '#0f0f10',
        'bg-alt': '#161618',
        surface: '#1f2022',
        'surface-alt': '#27282b',
        border: '#2f3033',
        accent: '#f5c851',
        'accent-glow': 'rgb(255 200 81)',
        text: '#e8e8ea',
        'text-soft': '#b5b5bb'
      },
      boxShadow: {
        elev: '0 4px 16px -4px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.03) inset',
        panel: '0 20px 60px -20px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.05)'
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '18px'
      },
      transitionTimingFunction: {
        fast: 'cubic-bezier(.4,0,.2,1)'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.focus-outline': {
          outline: '2px solid theme("colors.accent")',
          'outline-offset': '2px'
        }
      });
    }
  ]
};
