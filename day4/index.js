const fs = require("fs");
const solution = require("./solution");

fs.readFile("day4/input.txt", (err, data) => {
  if (err) {
    throw err;
  }
  list = data
    .toString()
    .split("\n")
    .map(str =>
      str
        .split(/\[(.+(\d\d))\] (wakes up|falls asleep|Guard #(\d+))/)
        .slice(1, 5)
    )
    .map(([date, minutes, event, guardNum]) => {
      return {
        date: Date.parse(date),
        minutes: parseInt(minutes),
        event,
        guardNum: parseInt(guardNum)
      };
    })
    .sort((a, b) => a.date - b.date);

  console.log("Part 1: ", solution.part1(list));
  console.log("Part 2: ", solution.part2(list));
});
