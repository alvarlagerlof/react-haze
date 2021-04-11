import { buildSync } from "esbuild";

const args = process.argv.slice(2);

buildSync({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: false,
  sourcemap: true,
  format: "esm",
  outdir: "dist",
  external: ["react", "react-dom"],
  watch: args && args[0] === "watch",
});
