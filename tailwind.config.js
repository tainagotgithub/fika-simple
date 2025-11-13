/** @type {import('tailwindcss').Config} */
module.exports = {
  // O 'content' diz ao Tailwind onde procurar por classes
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      // Aqui entram suas cores
      colors: {
        'fika-verde': '#925716',
        'fika-azul': '#023274',
        'fika-bege': '#fdf5e4',
        'fika-amarelo': '#f2b83d',
        'fika-vermelho': '#cc3c46',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Você já tem isso no seu globals.css
  ],
};