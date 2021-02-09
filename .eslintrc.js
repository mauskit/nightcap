module.exports = {
  // ソースコードが対象としている環境
  // ここの指定によって使えるクラスや関数の種類が変わる
  env: {
    browser: true,
    es2021: true,
  },
  // 設定をまとめて変更する場合はextendsに記述する
  // 配列の0番目から順番に上書きされるため、Prettier関連の記述は最後に追加する
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  // プロジェクト内部で個別に機能を切り替えたい時はrulesに記述する
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-closing-bracket-location': [
      'error',
      { selfClosing: 'tag-aligned', nonEmpty: 'after-props' }
    ],
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': ['off', { caseSensitive: true }],
    'import/extensions': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
