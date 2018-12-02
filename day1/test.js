const assert = require("assert");
const solution = require("./solution");

describe("Day 1: Chronal Calibration", () => {
  describe("Part 1", () => {
    it("Default to 0", () => {
      assert.equal(solution.part1([]), 0);
    });

    it("Adds numbers", () => {
      assert.equal(solution.part1([0, 1, 2, 1]), 4);
    });

    it("Works with negatives", () => {
      assert.equal(solution.part1([-1, 2, -3]), -2);
    });
  });

  describe("Part Two", () => {
    it("First reaches 0 twice", () => {
      assert.equal(solution.part2([1, -1]), 0);
    });

    it("First reaches 10 twice", () => {
      assert.equal(solution.part2([3, 3, 4, -2, -4]), 10);
    });

    it("First reaches 5 twice", () => {
      assert.equal(solution.part2([-6, 3, 8, 5, -6]), 5);
    });

    it("First reaches 14 twice", () => {
      assert.equal(solution.part2([7, 7, -2, -7, -4]), 14);
    });
  });
});
