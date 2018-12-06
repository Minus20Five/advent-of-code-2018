const assert = require("assert");
const solution = require("./solution");

describe("Day 5: Alchemical Reduction", () => {
  describe("Part 1", () => {
    it("Units after reacting polymers", () => {
      assert.equal(solution.part1("dabAcCaCBAcCcaDA"), 10);
    });
  });

  describe("Part Two", () => {
    it("Letter removal than reacting polymers", () => {
      assert.equal(solution.part2("dabAcCaCBAcCcaDA"), 4);
    });
  });
});
