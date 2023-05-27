/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue, js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {
      backgroundImage: {
        'footer-community': "url('~/assets/img/networks/layer.png')",
      },

      colors: {
        red: {
          800: '#E11D2E',
          900: '#AC1216',
        },
        blue: {
          900: '#071022',
          800: '#101932',
          700: '#162344',
          600: '#162758',

        },
        grey: {
          100: '#ffffff0d',
          800: '#A0A3B5',
          700: '#71768E',
        },
        yellow: {
          800: '#5A4039',
          900: '#FFF50099'
        }
      }
    }
  },
  plugins: [],
};
