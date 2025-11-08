import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      "no-var": "error",
      "no-duplicate-imports": "warn",
      "no-self-compare": "warn",
      "no-template-curly-in-string": "warn",
      "no-unassigned-vars": "error",
    },
  },
]);
