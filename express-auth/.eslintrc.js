module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    env: {
      browser: true,
      es2017: true,
      node: true,
    },
    root: true,
    extends: [
      'standard-with-typescript',
      'plugin:prettier/recommended',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['prettier', '@typescript-eslint', 'import'],
    ignorePatterns: ['src/**/*.test.ts'],
    rules: {
      // JavaScript rules
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-unused-vars': 'warn',
      'require-await': 'warn',
      'object-shorthand': 'warn',
      'quote-props': ['warn', 'as-needed'],
      'no-duplicate-imports': 'eror',
      // TypeScript rules
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/require-await': ['warn'],
      '@typescript-eslint/no-floating-promises': ['warn'],
      'prettier/prettier': 'warn',
    },
  };