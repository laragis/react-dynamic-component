import type { Options } from 'tsup';

const env = process.env.NODE_ENV;

export const tsup: Options = {
  splitting: false,
  sourcemap: env === 'production', // source map is only available in prod
  clean: true, // rimraf disr
  dts: true, // generate dts file for main module
  format: ['cjs', 'esm'], // generate cjs and esm files
  minify: env === 'production',
  bundle: env === 'production',
  skipNodeModulesBundle: true,
  target: 'es5',
  outDir: 'dist',
  entry: ['src/**/*.ts'],
  treeshake: true
};
