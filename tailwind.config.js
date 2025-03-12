/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        primary: {
          100: "#365327",

          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        pri: {
          100: "#365327",
        },
        sec: {
          100: "#717A76",
          200: "#F7F8F9",
          300: "#A19B9B",
          400: "#FAFFF7",
        },
        cusGreen: {
          100: "#1A2921",
          200: "#7C9A82",
          300: "#B7EB9C",
          400: "#EDFFB3",
          500: "#A7BC9D",
          600: "#F4F1ED",
          700: "#6D8F6A",
          800: "#2A3B32",
          900: "#E2F5D8",
        },
        offWhite: {
          100: "#F8E9D9",
          200: "#FFFAF5",
          300: "#E7CAAA",
          400: "#F8FFF3",
          500: "#F9F8F6",
          600: "#FDF8F2",
        },
        cusRed: {
          100: "#AE5B5B",
          200: "#D7443E",
          300: "#E17B7B",
          400: "#907D78",
          500: "#B49D97",
        },
        cusGray: {
          100: "#64748B",
          200: "#6F6C90",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        openSans: ["var(--font-open-sans)"],
        dmSans: ["var(--font-dm-sans)"],
        cairo: ["var(--font-cairo)"],
        fireSans: ["var(--font-fire-sans)"],
      },
      boxShadow: {
        "light-100": "0px 8px 4px 0px rgba(191, 189, 189, 0.04)",
      },
      backgroundImage: {
        titleBg: "url('/assets/images/background-2.svg')",
        mask: "url('/assets/images/Mask.svg')",
      },
      screens: {
        xs: "420px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      filter: {
        "custom-filter":
          "invert(98%) sepia(48%) saturate(546%) hue-rotate(311deg) brightness(117%) contrast(94%)",

        custom:
          "invert(100%) sepia(13%) saturate(2%) hue-rotate(54deg) brightness(107%) contrast(101%)",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("tailwindcss-filters")],
};
