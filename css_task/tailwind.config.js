/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-amber": "#78350F",
        "custom-dark-blue": "#0F172A",
        "custom-light-gray": "#E2E8F0",
        "custom-white": "#FFFBEB",
      },
      dropShadow: {
        boxShadow: {
          custom:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 0px 4px 0px rgba(0, 0, 0, 0.07)",
        },
      },
    },
  },
  plugins: [],
};
