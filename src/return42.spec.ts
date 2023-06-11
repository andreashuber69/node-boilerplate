import { expect } from "chai";
import { return42 } from "./return42.js";

describe("return42", () => {
    it("should return 42", () => {
        expect(return42()).to.equal(42);
    });
});
