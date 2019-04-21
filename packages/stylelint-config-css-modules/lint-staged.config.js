module.exports = {
  '*.md': [
    'markdownlint -i CHANGELOG.md -c ./node_modules/@webacceleration/markdownlint-config-base/.markdownlintrc',
    'git add'
  ]
};
