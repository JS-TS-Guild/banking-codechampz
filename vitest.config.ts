import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    // Vitest configuration options
    globals: true,
    environment: "jsdom",
  },
  // resolve: {
  //   alias: {
  //     "@": "./src", // Map '@/...' to the src directory
  //   },
  // },
});
