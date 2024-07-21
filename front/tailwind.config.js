/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      mdlg: '992px',
      lg: '1024px',
      xl: '1280px',
      '1.5xl': '1455px',
      '2xl': '1536px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      nina_primary_color: '#5b43d9',
      nina_primary__medium_color: '#9886f2',
      nina_primary_light_color: '#c9beff',
      nina_primary_extra_light_color: '#f1ecff',
      nina_secondary_extra_light_color: '#F3EEFF',
      nina_primary_dark_color: '#5946bd',
      black_1: '#050505',
      black_2: '#313131',
      black_3: '#515151',
      black_4: '#F1ECFF',
      black: '#000000',
      white_default: '#FFFFFF',
      gray_1: '#89888E',
      gray_2: '#B6B5BB',
      light_gray_3: '#E9E8EB',
      gray_4: '#F8F8F8',
      light_gray_5: '#706F71',
    },
    extend: {
      boxShadow: {
        selector_card: '2px 2px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
