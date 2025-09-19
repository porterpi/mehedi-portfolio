/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},   // ✅ New Tailwind plugin
    autoprefixer: {},
  },
};
