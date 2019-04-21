const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  extends: [
    'tslint-eslint-rules',
    'tslint-consistent-codestyle',
  ].concat([
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6'
  ].map(require.resolve)),
  rules: {
    'no-debugger': isProduction ? true : false,
    'no-console': isProduction ? true : false,
    'no-namespace': true
  }
};
