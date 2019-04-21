module.exports = {
  plugins: ['vue'],
  extends: [
    '@webacceleration/eslint-config-base',
    'plugin:vue/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/no-v-html': 0,
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/attributes-order': [
      2,
      {
        order: [
          'DEFINITION',
          'CONDITIONALS',
          'LIST_RENDERING',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'BINDING',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/require-component-is': 0
  }
};
