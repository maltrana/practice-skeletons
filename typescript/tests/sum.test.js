"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../src/sum");
it("sums a couple of numbers", () => {
    expect(sum_1.sum(1, 2)).toBe(3);
});
