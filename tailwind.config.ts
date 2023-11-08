import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.tsx',
  ],
  theme: { screens: {
      'sm': '390px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
export default config
