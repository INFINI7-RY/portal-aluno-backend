// eslint.config.js
import tseslint from "typescript-eslint";

export default tseslint.config({
    files: ["**/*.ts"],
    ignores: ["dist", "node_modules"],
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            project: "./tsconfig.json",
            sourceType: "module",
            ecmaVersion: "latest",
        },
    },
    plugins: {
        "@typescript-eslint": tseslint.plugin,
    },
    rules: {
        "no-console": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "max-len": ["warn", { code: 120 }],
    },
});
