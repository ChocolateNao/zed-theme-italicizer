import { build } from '../../esbuild.config.mjs';

await build({
  entryPoints: ['src/index.ts'],
  metafile: true,
});
