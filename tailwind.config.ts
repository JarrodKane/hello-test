import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    '.src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['var(--font-roboto-slab)', 'serif'],
        poppins: ['var(--font-poppins)', 'serif'],
        rufina: ['var(--font-rufina)', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-green-lightest': '#C2EFD4',
        'brand-green-light': '#6BC785',
        'brand-green-medium': '#267D49',
        'brand-green-dark': '#224F34',
        'brand-green-highlight': '#10FF70',
      },
      borderRadius: {
        'brand-link': '0.1875rem',
      },
      fontSize: {
        'brand-xs': '16px',
        'brand-sm': '20px',
        'brand-base': '22px',
        'brand-lg': '24px',
        'brand-xl': '30px',
        'brand-2xl': '32px',
        'brand-3xl': '46px',
        'brand-4xl': '50px',
        'brand-5xl': '64px',
        'brand-6xl': '86px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
