module.exports = {
  content: ['./src/**/*.{html,js}', './src/components/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        md: '768px',
      },
      maxHeight: {
        '4/5': '80%',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
