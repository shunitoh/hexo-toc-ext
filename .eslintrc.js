module.exports = {
  // So parent files don't get applied
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'babel',
    "import"
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'arrow-parens': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': 'error',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'consistent-return': 'off', // Wishlist, one day
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'smart'],
    'eol-last': 'error',
    'indent': ['error', 2, {SwitchCase: 1}],
    'id-blacklist': ['error', 'e'],
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'max-len': ['error', 120, 4],
    'new-cap': ['off', {capIsNew: true, newIsCap: true}], // Wishlist, one day
    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-shadow': 'off', // Wishlist, one day
    'no-spaced-func': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': 'error',
    'no-undef': 'error',
    'no-empty-pattern': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-cond-assign': 'error',
    'no-extra-semi': 'error',
    'no-extra-boolean-cast': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'off', // Wishlist, one day
    //'prefer-const': ['error', {ignoreReadBeforeAssign: true}],
    'prefer-template': 'error',
    'quotes': ['error', 'single', 'avoid-escape'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': 'error',
    'yoda': 'error',
    'babel/object-curly-spacing': ['error', 'never'],
    'generator-star-spacing': 'error',
    'babel/no-await-in-loop': 'error',
    'no-case-declarations': 'off',
    'babel/object-shorthand': 'off'
  }
};
