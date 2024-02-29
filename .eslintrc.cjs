// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    '@vue/prettier',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended',
    // 'plugin:tailwindcss/recommended',
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'vue/multi-word-component-names': 0,
    'no-irregular-whitespace': 0,
  },
}
