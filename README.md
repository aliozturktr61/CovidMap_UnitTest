# Covid Map And UnitTest
- Bu projede redux yapısı  kullanılmıştır.
- Projede react-icons , tailwinds kütüphaneleri ile stillendirmeler yapılmış,
- Axios ile api istek atılmış,
- gelen veriler componentler aracılığı ile sayfaya yansıtılmıştır.
- Tasarımda react-simple-maps kullanılmıştır.
# Kütüphaneler

- react-router-dom
- redux-mock-store
- react-icons
- tailwind
1. adım
npm install -D tailwindcss
npx tailwindcss init
2.adım
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
3.adım 
index.css içerisine
@tailwind base;
@tailwind components;
@tailwind utilities;
ekleyin

- react-simple-maps
- @reduxjs/toolkit
- react-redux
- @testing-library/user-event@14.0
- axios@^0.27.2
kurulum için
npm install 'axios@^0.27.2'
- react-testing-library

Kullandığımız Api:
rapidapi içerisinde covid istatic  alıyoruz.

-- bir nesneyi diziye dönüştürmek için Object.entries kullanıyoruz.# CovidMap_UnitTest
