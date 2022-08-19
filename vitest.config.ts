import {defineConfig} from 'vitest/config';
import {svelte} from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte({hot: !process.env.VITEST})],
	test: {
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		setupFiles: './vitest.setup.ts',
		environment: 'jsdom',
	},
});
