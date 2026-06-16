import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  {
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      parser: vue.parser,
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "no-undef": "off", // Nuxt auto-imports variables, so ignore no-undef
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  prettier,
];
