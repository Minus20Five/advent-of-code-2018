const assert = require("assert");
const solution = require("./solution");

describe("Day 2: Inventory Management System", () => {
  describe("Part 1", () => {
    it("Checksum is 12", () => {
      assert.equal(
        solution.part1([
          "abcdef",
          "bababc",
          "abbcde",
          "abcccd",
          "aabcdd",
          "abcdee",
          "ababab"
        ]),
        12
      );
    });
  });

  describe("Part Two", () => {
    it("Produces 'fgij' as the constant part", () => {
      assert.equal(
        solution.part2([
          "abcde",
          "fghij",
          "klmno",
          "pqrst",
          "fguij",
          "axcye",
          "wvxyz"
        ]),
        "fgij"
      );
    });
  });
});
