module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    "import/no-extraneous-dependencies": ["warn", { devDependencies: true }],
    "no-unused-vars": "off",
    "no-console": "off",
    "no-use-before-define": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off", // mutating redux state in redux-toolkit.
    "import/no-unresolved": "off", // raw-loader
    "global-require": "off", // raw-loader
    "react/no-array-index-key": "off",
    "react/no-unescaped-entities": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "react/no-danger": "off",
    "react/prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "react/default-props-match-prop-types": "off",
    "react/no-unused-prop-types": "off",
    "react/react-in-jsx-scope": "off", // after react v17
    "react/jsx-uses-react": "off", // after react v17
    "react/jsx-no-bind": "off",
    quotes: "off",
    "space-before-function-paren": "off",
    "comma-dangle": "off",
  },
};
