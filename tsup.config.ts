import { Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: [
      'src/index.tsx',
  ],
  target: 'es5',
  minify: false,
  watch: options.watch,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: !options.watch,
  external: ['react'],
  splitting: false,
  clean: true,
  treeshake: true
}))
