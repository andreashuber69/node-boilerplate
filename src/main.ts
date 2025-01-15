#!/usr/bin/env node

// https://github.com/andreashuber69/node-boilerplate/develop/README.md

import packageJson from "../package.json" with { type: "json" };

try {
    const { name, version } = packageJson;
    console.log(`${name} v${version}`);
} catch (error: unknown) {
    console.error(error);
    process.exitCode = 1;
} finally {
    console.log("\r\n");
}
