import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./front/**/*.{html,ts,vue}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": {
          50: "#f4f6f7",
          100: "#e3e7ea",
          200: "#cbd3d6",
          300: "#a6b4ba",
          400: "#7a8c96",
          500: "#5f717b",
          600: "#515f69",
          700: "#465058",
          800: "#3e454c",
          900: "#373d42",
          950: "#212529",
        },
        "trinidad": {
          50: "#fef6ee",
          100: "#feebd6",
          200: "#fbd4ad",
          300: "#f8b579",
          400: "#f48c43",
          500: "#f16c1e",
          600: "#e35314",
          700: "#bc3e12",
          800: "#953117",
          900: "#782b16",
          950: "#411309",
        },
      },
    },
  },
};
