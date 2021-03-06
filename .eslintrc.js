module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-trailing-spaces': 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    indent: 'off',
    'no-plusplus': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'class-methods-use-this': 'off',
        'no-plusplus': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
