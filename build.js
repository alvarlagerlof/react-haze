import { build } from "esbuild";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

const externalCjsToEsmPlugin = (external) => ({
  name: "external",
  setup(build) {
    let escape = (text) =>
      `^${text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}$`;
    let filter = new RegExp(external.map(escape).join("|"));
    build.onResolve({ filter: /.*/, namespace: "external" }, (args) => ({
      path: args.path,
      external: true,
    }));
    build.onResolve({ filter }, (args) => ({
      path: args.path,
      namespace: "external",
    }));
    build.onLoad({ filter: /.*/, namespace: "external" }, (args) => ({
      contents: `export * from ${JSON.stringify(args.path)}`,
    }));
  },
});

const args = process.argv.slice(2);

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: false,
  sourcemap: true,
  format: "esm",
  outdir: "dist",
  external: ["react", "react-dom", "/src/stories/*"],
  plugins: [
    vanillaExtractPlugin(),
    // externalCjsToEsmPlugin(["react", "react-dom"]),
  ],
  watch: args && args[0] === "watch",
}).catch(() => process.exit(1));
