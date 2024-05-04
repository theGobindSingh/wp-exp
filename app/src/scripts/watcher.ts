import { resolve } from "path";
import main, { appDir, backendPath } from "./index";
import watch from "node-watch";

console.log("watching...");

const w = watch(
  [backendPath, resolve(appDir, "./src")],
  { recursive: true },
  main
);

w.on("change", (evt, name) => {
  console.log(`${name} changed.`);
});
