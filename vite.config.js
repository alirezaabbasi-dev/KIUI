import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    lib: {
      entry: ["src/index.js"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: "my-lib-style",
    },
  },
});
