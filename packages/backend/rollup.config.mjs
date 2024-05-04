import typescript from "@rollup/plugin-typescript";

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: "src/index.ts",
    output: [
      {
        format: "cjs",
        file: "dist/index.js"
      }
    ],
    watch: {
      clearScreen: false
    },
    plugins: [typescript({ tsconfig: "./tsconfig.json" })]
  }
];

export default config;
