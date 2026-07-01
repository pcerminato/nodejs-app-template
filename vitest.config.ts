import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enables describe, it, expect globally without explicit imports
    environment: 'node',
  },
});
