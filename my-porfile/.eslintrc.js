const rulesDirPlugin = require('eslint-plugin-rulesdir')
rulesDirPlugin.RULES_DIR = '../tools/eslint/rules'

module.exports = {
    "extends": "react-app",
    "plugins": [
        "rulesdir"
    ],
    "rules": {
        "react/jsx-no-target-blank": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-restricted-globals": "warn",
        "max-lines-per-function": ["warn", 100],
        "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
        "@typescript-eslint/no-floating-promises": "warn",
        "camelcase": "error",
        "new-cap": "error",
        "no-var": "error",
        "rulesdir/export-const-uppercase": "error",
        "prefer-const": "error"
    },
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
