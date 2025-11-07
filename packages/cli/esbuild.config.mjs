import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  minify: true,
  format: 'esm',
  platform: 'node',
  target: 'esnext',

  // This adresses Error: Dynamic require of "node:events" is not supported
  // see https://github.com/evanw/esbuild/issues/1921#issuecomment-1403107887
  banner: {
    js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);",
  },
});
