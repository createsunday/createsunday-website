const colors = require("tailwindcss/colors")
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#030606',
        },
        secondary: {
          DEFAULT: '#FFF4E3',
        },
      },
      fontFamily: {
        title: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            //color: theme('colors.primary'),
            color: '#888',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/typography'),
  ],
}
