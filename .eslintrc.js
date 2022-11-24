module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  // parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 8,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     modules: true,
  //     allowImportExportEverywhere: true
  //   },
  // },
  rules: {
    'no-unused-vars': 1,
    quotes: [2, 'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'always'],
    'no-unreachable': 'off',
    'vue/html-quotes': ['off', 'double', { avoidEscape: false }],
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/valid-next-tick': [0, 'never'],
    'vue/no-v-html': [0, 'never']
  }
};
