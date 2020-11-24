#!/usr/bin/env node

import { spawn } from "child_process";
import tdscli from "@totvs/tds-ls";
import { argv } from "process";

console.log("[INFO] Starting tdsCLI-ls...");

const cli = spawn(tdscli, argv);

cli.stdout.on("data", (data) => {
  console.log(`[INFO] ${data}`);
});

cli.stderr.on("data", (data) => {
  console.log(`[ERROR] ${data}`);
});

cli.on("error", (error) => {
  console.log(`[ERROR] ${error.message}`);
});

cli.on("close", () => {
  console.log("[INFO] tdsCLI-ls finished.");
});
