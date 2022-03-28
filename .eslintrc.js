module.exports = {
  root: true,
  extends: ["plugin:tailwind/recommended", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "tailwind/class-order": "warn"
  }
}
