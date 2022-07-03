/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
 

  daisyui: {
    themes: [
      {
        light: {

          primary: "#176f6b",

          secondary: "#ffc000",

          accent: "#ffedd5",

          neutral: "#f3f4f6",

          "base-100": "#ffffff",

          info: "#98a8dd",

          success: "#1bbb70",

          warning: "#df7e07",

          error: "#Fa5c5c",
        },
      },
     { dark: {
          
        "primary": "#d9f990",
                 
        "secondary": "#fde68a",
                 
        "accent": "#4b5563",
                 
        "neutral": "#f3f4f6",
                 
        "base-100": "#1f2937",
                 
        "info": "#98a8dd",
                 
        "success": "#1bbb70",
                 
        "warning": "#df7e07",
                 
        "error": "#Fa5c5c",
       },
      },
    ],
  },

  plugins: [require("daisyui")],
}
