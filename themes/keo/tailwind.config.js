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
        'keo-light-gray': '#D9D9D9',
        'keo-medium-gray': '#A6A6A6',
        'keo-dark-gray': '#737373',
        'keo-very-dark-gray': '#404040',
        'keo-near-black': '#0D0D0D',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.keo-very-dark-gray'), // Default text
            lineHeight: '1.625', // Added for better readability (leading-relaxed)
            a: {
              color: theme('colors.keo-very-dark-gray'),    // Links (subtler, closer to body text)
              '&:hover': {
                color: theme('colors.keo-near-black'), // Link hover
              },
              textDecoration: 'underline',
              fontWeight: '500', // Keep slightly bolder for emphasis
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.keo-near-black'), // Headings
            },
            h1: { fontWeight: '700' },
            h2: { fontWeight: '600' },
            h3: { fontWeight: '600' },
            code: {
              color: theme('colors.keo-dark-gray'),
              backgroundColor: theme('colors.keo-light-gray'),
              border: `1px solid ${theme('colors.keo-medium-gray')}`,
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontWeight: '400',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              border: 'none',
            },
            pre: {
              backgroundColor: theme('colors.keo-light-gray'),
              border: `1px solid ${theme('colors.keo-medium-gray')}`,
              color: theme('colors.keo-very-dark-gray'),
            },
            blockquote: {
              color: theme('colors.keo-dark-gray'),
              borderLeftColor: theme('colors.keo-medium-gray'),
            },
            hr: { borderColor: theme('colors.keo-medium-gray') },
          },
        },
      }),
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        title: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        // Add a serif or mono font if you plan to use them
        // serif: ['Merriweather', 'serif'], 
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
