import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import path from "path";
import babelParser from "@babel/eslint-parser";
import globals from "globals";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
});

export default [
    {
        ignores: ["node_modules/**", "eslint.config.mjs"],
    },
    ...compat.extends("eslint:recommended", "plugin:import/errors", "plugin:import/warnings"),
    {
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                ecmaVersion: 7,
                sourceType: "module",
                requireConfigFile: false,
            },
            globals: {
                ...globals.node,
                ...globals.es6,
                ...globals.mocha,
            },
        },
        rules: {
            "no-console": "off",
            "comma-dangle": ["error", "never"],
            "indent": ["error", 4],
            "max-len": ["error", {
                "ignoreComments": true,
                "ignoreTemplateLiterals": true,
                "ignoreTrailingComments": true,
                "ignoreUrls": true
            }],
            "no-invalid-this": "off",
            "new-cap": ["error", { "properties": false }],
            "linebreak-style": "off",
        },
    },
];
