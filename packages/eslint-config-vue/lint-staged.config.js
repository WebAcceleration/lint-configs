module.exports = {
  './**/*.js': [
    'eslint --ext .js -c ./index.js ',
    'git add'
  ],
  '*.md': [
    'markdownlint -i CHANGELOG.md -c ./node_modules/@webacceleration/markdownlint-config-base/.markdownlintrc',
    'git add'
  ]
};
