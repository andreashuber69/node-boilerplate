import { describe, expect, it } from "vitest";
import { return42 } from "./return42.ts";

describe("return42", () => {
    it("should return 42", () => {
        expect(return42() === 42);
    });
});
