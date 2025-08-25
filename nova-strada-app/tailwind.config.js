import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        novastrada: {
          primary: '#212529',
          secondary: '#6c757d',
          accent: '#0d6efd',
          light: '#f8f9fa',
          dark: '#343a40',
        }
      }
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            50: '#e6f3ff',
            100: '#cce7ff',
            200: '#99cfff',
            300: '#66b6ff',
            400: '#339eff',
            500: '#0d6efd', // Bootstrap primary blue
            600: '#0056cc',
            700: '#004199',
            800: '#002d66',
            900: '#001833',
            foreground: '#ffffff',
            DEFAULT: '#0d6efd',
          },
          secondary: {
            50: '#f8f9fa',
            100: '#e9ecef',
            200: '#dee2e6',
            300: '#ced4da',
            400: '#adb5bd',
            500: '#6c757d',
            600: '#5a6268',
            700: '#495057',
            800: '#343a40',
            900: '#212529',
            foreground: '#ffffff',
            DEFAULT: '#6c757d',
          },
          background: '#ffffff',
          foreground: '#212529',
        }
      },
      dark: {
        colors: {
          primary: {
            50: '#001833',
            100: '#002d66',
            200: '#004199',
            300: '#0056cc',
            400: '#0d6efd',
            500: '#339eff',
            600: '#66b6ff',
            700: '#99cfff',
            800: '#cce7ff',
            900: '#e6f3ff',
            foreground: '#ffffff',
            DEFAULT: '#0d6efd',
          },
          secondary: {
            50: '#212529',
            100: '#343a40',
            200: '#495057',
            300: '#5a6268',
            400: '#6c757d',
            500: '#adb5bd',
            600: '#ced4da',
            700: '#dee2e6',
            800: '#e9ecef',
            900: '#f8f9fa',
            foreground: '#000000',
            DEFAULT: '#6c757d',
          },
          background: '#000000',
          foreground: '#ffffff',
        }
      }
    }
  })],
}
