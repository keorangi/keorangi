/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    '../../content/**/*.md', // To scan site-level content files
    './archetypes/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        // New Asterisk-inspired colors
        'brand-orange': 'rgb(255, 110, 80)',
        'light-beige': 'rgb(250, 248, 240)',
        'keo-black': '#000000', // Explicit black for text

        // Original keo colors (can be phased out or repurposed)
        'keo-light-gray': '#D9D9D9', // Kept for now, e.g. for code blocks
        'keo-medium-gray': '#A6A6A6', // Kept for now
        'keo-dark-gray': '#737373',   // Kept for now
        'keo-very-dark-gray': '#404040', // Kept for now
        'keo-near-black': '#0D0D0D', // Original near-black, keo-black is preferred for new main text
      },
      typography: (theme) => ({
        DEFAULT: { // Corresponds to .prose
          css: {
            color: theme('colors.keo-black'), // Default prose text is black
            fontFamily: theme('fontFamily.lora').join(', '), // Updated to lora
            fontWeight: theme('fontWeight.normal'),
            lineHeight: '1.625',
            a: {
              color: theme('colors.keo-black'),
              fontFamily: theme('fontFamily.lora').join(', '), // Updated to lora
              textDecoration: 'none',
              fontWeight: theme('fontWeight.normal'),
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.keo-black'),
            },
            h1: {
              fontFamily: theme('fontFamily.montserrat').join(', '),
              fontWeight: theme('fontWeight.normal'),
            },
            h2: {
              fontFamily: theme('fontFamily.playfair-display').join(', '),
              fontWeight: theme('fontWeight.normal'),
            },
            h3: {
              fontFamily: theme('fontFamily.lora').join(', '), // Updated to lora
              fontWeight: theme('fontWeight.normal'),
            },
            h4: {
              fontFamily: theme('fontFamily.lora').join(', '), // Updated to lora
              fontWeight: theme('fontWeight.normal'),
            },
            h5: {
              fontFamily: theme('fontFamily.lora').join(', '), // Updated to lora
              fontWeight: theme('fontWeight.normal'),
            },
            h6: {
              fontFamily: theme('fontFamily.lora').join(', '), // Updated to lora
              fontWeight: theme('fontWeight.normal'),
            },
            strong: { color: theme('colors.keo-black') },
            code: {
              color: theme('colors.keo-dark-gray'),
              backgroundColor: theme('colors.keo-light-gray'),
              border: `1px solid ${theme('colors.keo-medium-gray')}`,
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontWeight: '400',
              fontFamily: theme('fontFamily.mono') ? theme('fontFamily.mono').join(', ') : 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              border: 'none',
              fontFamily: 'inherit',
            },
            pre: {
              backgroundColor: theme('colors.keo-light-gray'),
              border: `1px solid ${theme('colors.keo-medium-gray')}`,
              color: theme('colors.keo-very-dark-gray'),
              fontFamily: theme('fontFamily.mono') ? theme('fontFamily.mono').join(', ') : 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
            blockquote: {
              color: theme('colors.keo-dark-gray'),
              borderLeftColor: theme('colors.keo-medium-gray'),
              fontFamily: theme('fontFamily.lora').join(', '), // Updated to lora
            },
            hr: { borderColor: theme('colors.keo-medium-gray') },
          },
        },
      }),
      fontWeight: {
        'thin': '100',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      fontFamily: {
        // New Google Font families
        'montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'playfair-display': ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        'lora': ['Lora', 'ui-serif', 'Georgia', 'serif'],

        // Commenting out old commercial fonts
        // 'atlas-grotesk': ['"Atlas Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // 'noe-standard': ['"Noe Standard"', 'ui-serif', 'Georgia', 'serif'],
        // 'noe-text': ['"Noe Text"', 'ui-serif', 'Georgia', 'serif'],
        
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Updated default sans
        serif: ['Lora', 'Georgia', 'ui-serif', 'serif'], // Updated default serif
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        title: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
