import { defineConfig } from "orval";

export default defineConfig({
  receipt: {
    input: {
      target: "./oas.yml",
      validation: true,
    },
    output: {
      target: "./src/api/",
      mock: true,
      client: "axios",
      mode: "split",
      clean: true,
      override: {},
    },
    // hooks: {
    //   afterAllFilesWrite: [
    //     'prettier --write "./src/**/*.{ts,tsx}"',
    //     'eslint src --ext ts --ext tsx --fix'
    //   ]
    // }
  },
});
