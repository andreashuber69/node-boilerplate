import assert from "node:assert";
import { describe, it } from "node:test";
import { return42 } from "./return42.js";

describe("return42", () => {
    it("should return 42", () => {
        assert(return42() === 42);
    });
});
