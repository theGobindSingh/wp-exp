import { copyFile, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";

export const appDir = resolve(dirname(""));
export const appDistDir = resolve(appDir, "./dist");
export const backendPath = resolve(appDir, "../packages/backend");
export const backendDistPath = resolve(backendPath, "./dist");

const distInit = () => {
  if (!existsSync(appDistDir)) {
    mkdirSync(appDistDir);
  }
};

const copyBackendScript = () => {
  copyFile(
    resolve(backendDistPath, "./index.js"),
    resolve(appDistDir, "./bg.js"),
    (err) => {
      if (err) throw err;
      console.log("Backend script copied.");
    }
  );
};

const copyManifestFile = () => {
  copyFile(
    resolve(appDir, "./src/manifest.json"),
    resolve(appDistDir, "./manifest.json"),
    (err) => {
      if (err) throw err;
      console.log("Manifest file copied.");
    }
  );
};

const main = () => {
  distInit();
  copyManifestFile();
  copyBackendScript();
};

main();

export default main;
