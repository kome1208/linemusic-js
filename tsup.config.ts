import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    bundle: true,
    dts: true,
    format: ['cjs', 'esm'],
    keepNames: true,
    minify: false,
    esbuildPlugins: [],
    entry: ['./src/index.ts'],
    skipNodeModulesBundle: true,
    sourcemap: 'inline',
    target: 'esnext',
    silent: true,
});