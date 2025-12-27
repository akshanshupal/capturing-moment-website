import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcdbff",
          300: "#8ec4ff",
          400: "#59a2ff",
          500: "#2b7eff",
          600: "#1a5ef5",
          700: "#1448e1",
          800: "#163bb6",
          900: "#16358f",
        },
        // Override blue to match primary for Material Tailwind components using color="blue"
        blue: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcdbff",
          300: "#8ec4ff",
          400: "#59a2ff",
          500: "#2b7eff",
          600: "#1a5ef5",
          700: "#1448e1",
          800: "#163bb6",
          900: "#16358f",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
});

export default config;
