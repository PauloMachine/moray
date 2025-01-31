import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup-tests.ts",
  },
  base: "/",
  plugins: [react()],
} as UserConfig);
