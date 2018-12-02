const fs = require("fs");
const solution = require("./solution");

fs.readFile("day1/input.txt", (err, data) => {
  if (err) {
    throw err;
  }
  list = data
    .toString()
    .split("\n")
    .map(item => parseInt(item));

  console.log("Part 1 (sum): ", solution.part1(list));
  console.log("Part 2 (first repeat): ", solution.part2(list));
});
