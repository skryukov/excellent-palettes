import * as esbuild from 'esbuild'
import * as path from 'path'
import rails from 'esbuild-rails'

const ctx = await esbuild.context({
  plugins: [rails()],
  entryPoints: ['application.js'],
  bundle: true,
  sourcemap: true,
  format: 'esm',
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  publicPath: '/assets',
})

if (process.argv.includes("--watch")) {
  await ctx.watch()
  console.log('watching...')
} else {
  await ctx.rebuild()
  ctx.dispose()
}
