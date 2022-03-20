module.exports = {
  content: [
    './src/**/*.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/hero-pattern.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
