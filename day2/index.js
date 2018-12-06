const fs = require("fs");
const solution = require("./solution");

fs.readFile("day2/input.txt", (err, data) => {
  if (err) {
    throw err;
  }
  list = data.toString().split("\n");

  console.log("Part 1: ", solution.part1(list));
  console.log("Part 2: ", solution.part2(list));
});
