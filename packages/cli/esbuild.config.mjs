import { build } from '../../esbuild.config.mjs';

await build({
  entryPoints: ['src/index.ts'],
  metafile: true,

  // This adresses Error: Dynamic require of "node:events" is not supported
  // see https://github.com/evanw/esbuild/issues/1921#issuecomment-1403107887
  banner: {
    js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);",
  },
});
