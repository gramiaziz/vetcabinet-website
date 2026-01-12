/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
       brand: {
      DEFAULT: '#E07A2F',
      dark: '#C66523',
    },
        border: "var(--color-border)", /* gray-200 */
        input: "var(--color-input)", /* gray-200 */
        ring: "var(--color-ring)", /* orange-600 */
        background: "var(--color-background)", /* white */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* orange-600 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* orange-500 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-50 */
          foreground: "var(--color-muted-foreground)", /* gray-600 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* pink-500 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* gray-50 */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-600 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* yellow-500 */
          foreground: "var(--color-warning-foreground)", /* gray-900 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        trust: {
          DEFAULT: "var(--color-trust)", /* blue-gray-800 */
          foreground: "var(--color-trust-foreground)", /* white */
        },
        whatsapp: {
          DEFAULT: "var(--color-whatsapp)", /* whatsapp-green */
          foreground: "var(--color-whatsapp-foreground)", /* white */
        },
        gold: {
          DEFAULT: "var(--color-gold)", /* gold */
          foreground: "var(--color-gold-foreground)", /* gray-900 */
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
        'h1': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'grid': 'var(--spacing-grid)',
        'mobile': 'var(--spacing-mobile)',
      },
      borderRadius: {
        'card': 'var(--radius-card)',
        'button': 'var(--radius-button)',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'interactive': 'var(--shadow-interactive)',
        'emergency': 'var(--shadow-emergency)',
        'subtle': 'var(--shadow-subtle)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-emergency": {
          "0%, 100%": { 
            boxShadow: "0 0 0 0 rgba(255, 107, 53, 0.7)" 
          },
          "50%": { 
            boxShadow: "0 0 0 20px rgba(255, 107, 53, 0)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-emergency": "pulse-emergency 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
}