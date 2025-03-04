

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",

  ],
  theme: {
    extend: {
      colors: {
        CofeeBrown: '#f1eee7',
        Cream: '#FDFDFD',
        Grey: '#f1f0ee',
        Olive: '#D4E0CB',
        DarkOlive: '#ACBBA0',
        DarkGrey:"BCB9B9",
        AntiqRose: '#E0CBCC',
        Orange:'#ffcb66',
        Brown: {
          '50': '#DCD0B3',
          '100': '#C1BAA7',
        },
        Red: '#E55A5B',
        SmokeBlack: '#787171',
        Lime:"#FAFEF6"
      },

      fontFamily: {
        'sans': ['"Kodchasan"', ...defaultTheme.fontFamily.sans],
        '300': '"Kodchasan-Light"',
        '400': '"Kodchasan-Regular"',
        '500': '"Kodchasan-Medium"',
        '600': '"Kodchasan-Semibold"',
        'bold': '"Kodchasan-Bold"',
        'krona': '"Krona One"',
        'rubik': '"RubikMonoOne-Regular"',
        'otomanopee': 'Otomanopee-One',
        'stripes': "Stripes",
        'marigo':'Marigo'
      },

      
    },
  },
  plugins: [],
}