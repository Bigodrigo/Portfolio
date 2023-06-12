/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'palet-one-pri': '#332a2a',
      'palet-one-sec': '#000312',
      'palet-one-ter': '#545766',
      'palet-one-qua': '#0f1100',
      'palet-one-qui': '#c3cb00',
      'palet-two-pri': '#0a0707',
      'palet-two-sec': '#463535',
      'palet-two-ter': '#836561',
      'palet-two-qua': '#e5e5d9',
      'palet-two-qui': '#1082b5',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
