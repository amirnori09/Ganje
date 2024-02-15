// tailwind.config.js

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'yellow_custom': '#FDCB18',
      'primary_custom': '#5A4FCF',
      'white_custom': '#FFFFFF',
      neutral: {
        50: '#f8f9fa',
        100: '#FFF'
      },
      body: {
        100: '#888',
        200: '#444',
        300: '#222',
        400: '#000'
      },
      dark: {
        DEFAULT: '#333333',
      },
    },
    extend: {
      backgroundImage: {
        'hero': "url('/public/assets/Images/hotel.png')"
      },
      daisyui: {
        themes: ["light", "dark"],
      },
      fontFamily: {
        sans: ['var(--font-dana)'],
      },
    },
  },
  plugins: [require("daisyui")],
  'postcss-custom-properties-fallback': {},
};
