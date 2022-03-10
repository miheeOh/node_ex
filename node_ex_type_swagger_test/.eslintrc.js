module.exports = {
    "env": {
        // eslint가 사용될 환경
        "browser": true,
        "node": true,
        "es2017": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        // 개별적으로 적용할 규칙
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
    // off or 0
    // warn or 1
    // error or 2
}
