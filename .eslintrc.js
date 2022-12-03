module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'next/core-web-vitals', 'plugin:storybook/recommended'],
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }]
  }
};