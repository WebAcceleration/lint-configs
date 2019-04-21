module.exports = {
  extends: [
    '@webacceleration/tslint-config-base',
    'tslint-config-prettier'
  ],
  rulesDirectory: ['tslint-plugin-prettier'],
  rules: {
    'prettier': true
  }
};
