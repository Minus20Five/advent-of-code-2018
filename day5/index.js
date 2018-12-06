const fs = require("fs");
const solution = require("./solution");

fs.readFile("day5/input.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("Part 1: ", solution.part1(data.toString()));
  console.log("Part 2: ", solution.part2(data.toString()));
});
