// Builds release/: the exact file set that runs on cPanel.
//   release/app.js        bundled Express server (no node_modules needed)
//   release/public/       built React client
//   release/package.json  minimal, so Node treats app.js as CommonJS
//   release/.cpanel.yml   tells cPanel Git where to copy everything
import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";

const out = "release";
rmSync(out, { recursive: true, force: true });
mkdirSync(out);

cpSync("server/dist/app.js", `${out}/app.js`);
cpSync("server/dist/app.js.map", `${out}/app.js.map`);
cpSync("client/dist", `${out}/public`, { recursive: true });
cpSync("deploy/.cpanel.yml", `${out}/.cpanel.yml`);
writeFileSync(
  `${out}/package.json`,
  JSON.stringify({ name: "prismprecon", private: true, main: "app.js", scripts: { start: "node app.js" } }, null, 2) + "\n",
);

console.log("release/ ready");
