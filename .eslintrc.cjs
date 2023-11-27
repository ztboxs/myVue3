/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    // 启用插件 'vue' 并使用其 'vue3-essential' 配置，这个配置包含了一些 Vue.js 3 的基本规则。
    'plugin:vue/vue3-essential',
    // 使用 ESLint 官方推荐的一些规则
    'eslint:recommended',
    // 启用 '@vue/eslint-config-typescript' 配置，这个配置包含了一些针对 TypeScript 的推荐规则。
    '@vue/typescript/recommended',
    // 启用 '@vue/eslint-config-prettier' 配置，这个配置关闭所有和 Prettier 冲突的规则，让 ESLint 和 Prettier 能够更好地协同工作。
    '@vue/prettier',
    // 启用 '@vue/eslint-config-prettier/@typescript-eslint' 配置，这个配置关闭所有和 Prettier 以及 TypeScript 冲突的规则，让 ESLint、Prettier 和 TypeScript 能够更好地协同工作。
    '@vue/prettier/@typescript-eslint',
    // 启用 'prettier' 插件的 'recommended' 配置，这个配置包含了一些 Prettier 推荐的规则，并且把 Prettier 本身设置为 ESLint 的一个规则，这样 ESLint 就会在检查代码的时候同时运行 Prettier(运行.prettierric.json文件里的规则)。
    'plugin:prettier/recommended'
  ],

  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
