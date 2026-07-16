import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const staticOutput = path.join(root, "dist-static");
const sitesOutput = path.join(root, "dist");

await rm(sitesOutput, { recursive: true, force: true });
await mkdir(path.join(sitesOutput, "client"), { recursive: true });
await mkdir(path.join(sitesOutput, "server"), { recursive: true });
await mkdir(path.join(sitesOutput, ".openai"), { recursive: true });

await cp(staticOutput, path.join(sitesOutput, "client"), { recursive: true });
await cp(
  path.join(root, "sites", "worker.js"),
  path.join(sitesOutput, "server", "index.js"),
);
await cp(
  path.join(root, ".openai", "hosting.json"),
  path.join(sitesOutput, ".openai", "hosting.json"),
);

console.log("Prepared Sites output in dist/.");
