import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['e2e/*.{test,spec}.ts'], // avoid e2e tests folder
  },
});
