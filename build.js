import { build } from "esbuild";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

const args = process.argv.slice(2);

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: false,
  sourcemap: true,
  format: "esm",
  outdir: "dist",
  external: [
    "react",
    "react-dom",
    "/src/stories/style.css",
    "/src/stories/Haze.stories.tsx",
  ],
  plugins: [vanillaExtractPlugin()],
  watch: args && args[0] === "watch",
}).catch(() => process.exit(1));
