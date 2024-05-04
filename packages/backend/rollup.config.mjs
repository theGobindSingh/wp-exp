import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: "src/index.ts",
    output: [
      {
        format: "cjs",
        file: "dist/index.js",
        inlineDynamicImports: true
      }
    ],
    watch: {
      clearScreen: false
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser()
    ]
  }
];

export default config;
