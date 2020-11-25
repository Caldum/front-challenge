module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  extends: [
    'airbnb',
    "plugin:jest/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    semi: 0,
    "react/jsx-indent-props": 0,
    "indent": ["spaces", 2],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent": [2, 4],
    "arrow-parens": 0,
    "implicit-arrow-linebreak": 0,
    "react/jsx-fragments": 0
  },
};
