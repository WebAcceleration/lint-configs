module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8
  },
  extends: ['airbnb-base'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : 'off',
    'comma-dangle': 0,
    indent: 0,
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-var': 'error',
    'no-plusplus': 0,
    'max-len': [
      'error',
      {
        code: 95,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^\\s*const\\s.+=\\s*require\\s*\\('
      }
    ],
    'implicit-arrow-linebreak': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0
  }
};
