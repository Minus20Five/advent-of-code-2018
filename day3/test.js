const assert = require("assert");
const solution = require("./solution");

describe("Day 3: No Matter How You Slice It", () => {
  describe("Part 1", () => {
    it("Test overlap is detected (and equals 4)", () => {
      assert.equal(
        solution.part1([
          { x: 1, y: 3, width: 4, height: 4 },
          { x: 3, y: 1, width: 4, height: 4 },
          { x: 5, y: 5, width: 2, height: 2 }
        ]),
        4
      );
    });
  });

  describe("Part Two", () => {
    it("Test claim 3 has no overlap", () => {
      assert.equal(
        solution.part2([
          { id: 1, x: 1, y: 3, width: 4, height: 4 },
          { id: 2, x: 3, y: 1, width: 4, height: 4 },
          { id: 3, x: 5, y: 5, width: 2, height: 2 }
        ]),
        3
      );
    });
  });
});
