module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {

      backgroundImage: theme => ({               
        'carpa-1': "url('/carpa-1.jpg')",  
        'carpa-2': "url('/carpa-2.jpg')",
        'carpa-sm-1': "url('/carpa-sm-1.jpg')",  
        'carpa-sm-2': "url('/carpa-sm-2.jpg')"
                             
       })

    },
  },
  plugins: [],
}
