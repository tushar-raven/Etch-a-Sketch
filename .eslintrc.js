module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },

  rules: {
    quotes: ["error", "single"],
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"],
  },
};
