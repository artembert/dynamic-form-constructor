module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  ignorePatterns: [".eslintrc.js", "*.css", "*.png", "sw.ts"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/ignore": ["node_modules", "\\.(css|png|jpg|svg|json)$"],
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "tsconfig.json",
      },
    },
  },
  rules: {
    "no-console": "off",
    "no-plusplus": "off",
    "consistent-return": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/button-has-type": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/function-component-definition": "off",
    quotes: ["error", "double"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "for" },
      { blankLine: "always", prev: "for", next: "*" },
      { blankLine: "always", prev: "*", next: "switch" },
      { blankLine: "always", prev: "switch", next: "*" },
      { blankLine: "always", prev: "*", next: "if" },
      { blankLine: "always", prev: "if", next: "*" },
      { blankLine: "any", prev: "if", next: "if" },
    ],
    "import/no-unresolved": ["error", { commonjs: true, amd: true }],
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "object",
          "type",
          "unknown",
        ],
      },
    ],
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
  },
};
