module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "next",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["apps/*/tsconfig.json"],
      },
    },
  },
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "@next/next/no-html-link-for-pages": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
  },
  ignorePatterns: [
    "**/*.js",
    "**/*.json",
    "node_modules",
    "public",
    "styles",
    ".next",
    "coverage",
    "dist",
    ".turbo",
  ],
};
