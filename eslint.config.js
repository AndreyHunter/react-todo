import js from '@eslint/js';
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import eslintHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        plugins: {
            'react-hooks': eslintHooks,
            react: eslintReact,
            'react-refresh': eslintReactRefresh,
            prettier: prettierPlugin,
        },
    },
    {
        ignores: ['node_modules', 'dist', 'build'],
    },
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2021,
            },
            parserOptions: eslintReact.configs.recommended.parserOptions,
        },
    },
    {
        files: ['**/*.{js,jsx}'],
        rules: {
            ...eslintConfigPrettier.rules,
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'prefer-const': 'error',
            semi: 'error',
            quotes: ['warn', 'single'],
            'comma-style': ['error', 'last'],
            'no-unused-vars': ['warn'],
            'no-extra-semi': ['error'],
            'no-unreachable': ['error'],
            'no-unsafe-finally': ['error'],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
