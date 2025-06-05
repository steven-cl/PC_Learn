module.exports = {
  content: [
  "./index.html",
  "./public/**/*.html",
  "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#0D8DE3',
        accent: '#17BF63',
        background: '#E6F2FA',
        textDark: '#14171A',
        textLight: '#AAB8C2',
        neutral: '#F5F8FA',
        error: '#E0245E',
        warning: '#FFAD1F',
        success: '#19CF86',
        info: '#1DA1F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'outline-primary': '0 0 0 3px rgba(29, 161, 242, 0.5)',
        'outline-secondary': '0 0 0 3px rgba(13, 141, 227, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
