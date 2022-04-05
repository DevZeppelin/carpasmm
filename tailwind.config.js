module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {

      backgroundImage: theme => ({               
        'carpa-1': "url('/carpa-1.webp')",  
        'carpa-2': "url('/carpa-2.webp')",
        'carpa-sm-1': "url('/carpa-sm-1.webp')",  
        'carpa-sm-2': "url('/carpa-sm-2.webp')"
                             
       })

    },
  },
  plugins: [],
}
