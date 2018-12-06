const fs = require("fs");
const solution = require("./solution");

fs.readFile("day3/input.txt", (err, data) => {
  if (err) {
    throw err;
  }
  list = data
    .toString()
    .split("\n")
    .map(str =>
      str
        .split(/^#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/)
        .slice(1, 6)
        .map(v => parseInt(v))
    )
    .map(([id, x, y, width, height]) => ({ id, x, y, width, height }));

  console.log("Part 1: ", solution.part1(list));
  console.log("Part 2: ", solution.part2(list));
});
