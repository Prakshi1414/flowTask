import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        theme: {
          extend: {
            fontFamily: {
              roboto: ["Roboto", "sans-serif"], // creates font-roboto
              sans: ["Roboto", "sans-serif"],   // overrides font-sans globally
            },
          },
        },
      },
    }),
  ],
});
