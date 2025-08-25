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
          'dark-blue': '#14263D',
          'blue': '#1E4F85',
          'light-gray': '#BDC0C6',
          'primary': '#1E4F85',
          'secondary': '#14263D',
          'accent': '#BDC0C6',
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
            50: '#f0f4f8',
            100: '#d9e2ec',
            200: '#bcccdc',
            300: '#9fb3c8',
            400: '#829ab1',
            500: '#1E4F85', // NovaStrada blue
            600: '#1a4374',
            700: '#153762',
            800: '#102b50',
            900: '#0b1f3e',
            foreground: '#ffffff',
            DEFAULT: '#1E4F85',
          },
          secondary: {
            50: '#f7f8f9',
            100: '#eef0f2',
            200: '#dde1e6',
            300: '#bdc0c6', // NovaStrada light gray
            400: '#9da0a6',
            500: '#14263D', // NovaStrada dark blue
            600: '#112033',
            700: '#0e1a29',
            800: '#0b141f',
            900: '#080e15',
            foreground: '#ffffff',
            DEFAULT: '#14263D',
          },
          background: '#ffffff',
          foreground: '#14263D',
          content1: '#ffffff',
          content2: '#f8fafc',
          content3: '#f1f5f9',
          content4: '#e2e8f0',
        }
      },
      dark: {
        colors: {
          primary: {
            50: '#0b1f3e',
            100: '#102b50',
            200: '#153762',
            300: '#1a4374',
            400: '#1E4F85',
            500: '#2d5aa0',
            600: '#4c7bc8',
            700: '#7599d1',
            800: '#a3b9dc',
            900: '#d1dce7',
            foreground: '#ffffff',
            DEFAULT: '#1E4F85',
          },
          secondary: {
            50: '#080e15',
            100: '#0b141f',
            200: '#0e1a29',
            300: '#112033',
            400: '#14263D',
            500: '#2d3748',
            600: '#4a5568',
            700: '#718096',
            800: '#a0aec0',
            900: '#e2e8f0',
            foreground: '#ffffff',
            DEFAULT: '#14263D',
          },
          background: '#0a0e14',
          foreground: '#ffffff',
          content1: '#14263D',
          content2: '#1a2332',
          content3: '#202938',
          content4: '#262f3e',
        }
      }
    }
  })],
}
