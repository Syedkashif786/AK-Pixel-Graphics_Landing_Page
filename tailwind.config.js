module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: 'rgb(85,88,110)',
        secondary: 'rgb(85,88,110)',
        // tertiary: 'blue',
        border: 'lightorange',
        background: '#ffffff',
        // backgroundImage : "url('/assets/images/bgimagehealth.jpeg')"
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};


// primary: '#2a2f4a',
// secondary: '#2a2f4a',
// tertiary: '#2a2f4a',
// border: '#2a2f4a',
// background: '#ffffff',