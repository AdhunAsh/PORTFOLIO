// tailwind.config.js
module.exports = {
  content: ["./docs/**/*.{html,js}"], // or your path
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
