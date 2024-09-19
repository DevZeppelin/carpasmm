/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F6F2D4',
        secundary: '#FCF8EC',
        navbar: '#205E61',
        gray: '#131f48',
        lightGray: '#090f22',
        darkGray: '#456268',
        lowContrast: '#1A4870',
      },
      fontFamily: {
        body: ['Heebo'],
      },
      backgroundImage: theme => ({
        'hero-big': "url('/01.webp')",
        'hero-bigger': "url('/bgImage.webp')",
        'hero-pages': "url('/bgPages.webp')"
      })
    },
    plugins: [],
  }
}