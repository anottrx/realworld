module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'next/core-web-vitals', 'plugin:storybook/recommended'],
  ignorePatterns: '@components/**/*.stories.tsx',
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
