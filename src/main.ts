#!/usr/bin/env node

// https://github.com/andreashuber69/node-boilerplate/develop/README.md

import { createRequire } from "node:module";

try {
    // Simple typescript alternatives to calling require below lead to the outDir containing the file package.json and
    // the directory src with all the code. This is due to how the ts compiler automatically determines the rootDir from
    // imports. There are alternatives to calling require, but these seem overly complicated:
    // https://stackoverflow.com/questions/58172911/typescript-compiler-options-trying-to-get-flat-output-to-outdir
    const packageJson: unknown = createRequire(import.meta.url)("../package.json");

    if (typeof packageJson !== "object" || !packageJson || !("name" in packageJson) || !("version" in packageJson)) {
        throw new Error("Unexpected content in package.json");
    }

    const { name, version } = packageJson;
    console.log(`${name} v${version}`);
} catch (error: unknown) {
    console.error(error);
    process.exitCode = 1;
} finally {
    console.log("\r\n");
}
