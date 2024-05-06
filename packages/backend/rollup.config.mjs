import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

/** @type {import('rollup').Plugin[]} */
const plugins = [
  nodeResolve(),
  commonjs(),
  json(),
  typescript({ tsconfig: "./tsconfig.json" }),
  terser()
];

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: "src/bg.ts",
    output: [
      {
        format: "cjs",
        file: "dist/bg.js",
        inlineDynamicImports: true
      }
    ],
    watch: {
      clearScreen: false
    },
    plugins
  },
  {
    input: "src/content.ts",
    output: [
      {
        format: "cjs",
        file: "dist/content.js",
        inlineDynamicImports: true
      }
    ],
    watch: {
      clearScreen: false
    },
    plugins
  }
];

export default config;
