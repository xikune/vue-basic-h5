module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'global-require': [0],
    // 'no-param-reassign': [0],
    // 'no-unused-expressions': [0],
    // 'func-names': [0],
    // 'no-extraneous-dependencies': [0],
    // 'import/no-dynamic-require': [0],
    // 'import/no-extraneous-dependencies': [0],
    // 'prefer-template': [0]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [{
    files: [
      '**/__tests__/*.{j,t}s?(x)',
    ],
    env: {
      mocha: true,
    },
  }, ],
};
