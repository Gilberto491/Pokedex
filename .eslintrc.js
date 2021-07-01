module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: 'airbnb-base',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      PokeApi: 'readonly',
      Pokemon: 'readonly'
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    // https://eslint.org/docs/rules/
    rules: {
      'semi': 'off',
      'no-console': 'off',
      'arrow-parens': 'off',
      'class-methods-use-this': 'off',
      'no-underscore-dangle': 'off',
      'space-in-parens': [ 'error', 'always' ],
      'template-curly-spacing': [ 'error', 'always' ],
      'no-trailing-spaces': 'error',
    },
  };
