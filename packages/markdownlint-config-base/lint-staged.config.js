module.exports = {
  './**/*.*': [
    'git add'
  ],
  '*.md': [
    'markdownlint -i CHANGELOG.md -c ./.markdownlintrc',
    'git add'
  ]
};
