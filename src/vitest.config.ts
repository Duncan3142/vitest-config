import { defineConfig } from "vitest/config"

import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		include: ["test/**/*.spec.ts"],
		coverage: {
			reportsDirectory: ".vitest/coverage",
			include: ["src/**/*.ts"],
			skipFull: true,
			all: true,
		},
	},
})
