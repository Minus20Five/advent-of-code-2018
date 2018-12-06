const assert = require("assert");
const solution = require("./solution");

data = [
  { date: -14237552344000, minutes: 0, event: "Guard #10", guardNum: 10 },
  { date: -14237552044000, minutes: 5, event: "falls asleep", guardNum: NaN },
  { date: -14237550844000, minutes: 25, event: "wakes up", guardNum: NaN },
  { date: -14237550544000, minutes: 30, event: "falls asleep", guardNum: NaN },
  { date: -14237549044000, minutes: 55, event: "wakes up", guardNum: NaN },
  { date: -14237466064000, minutes: 58, event: "Guard #99", guardNum: 99 },
  { date: -14237463544000, minutes: 40, event: "falls asleep", guardNum: NaN },
  { date: -14237462944000, minutes: 50, event: "wakes up", guardNum: NaN },
  { date: -14237379244000, minutes: 5, event: "Guard #10", guardNum: 10 },
  { date: -14237378104000, minutes: 24, event: "falls asleep", guardNum: NaN },
  { date: -14237377804000, minutes: 29, event: "wakes up", guardNum: NaN },
  { date: -14237293024000, minutes: 2, event: "Guard #99", guardNum: 99 },
  { date: -14237290984000, minutes: 36, event: "falls asleep", guardNum: NaN },
  { date: -14237290384000, minutes: 46, event: "wakes up", guardNum: NaN },
  { date: -14237206564000, minutes: 3, event: "Guard #99", guardNum: 99 },
  { date: -14237204044000, minutes: 45, event: "falls asleep", guardNum: NaN },
  { date: -14237203444000, minutes: 55, event: "wakes up", guardNum: NaN }
];

describe("Day 4: Repose Record", () => {
  describe("Part 1", () => {
    it("Strategy 1: Guard that has the most minutes asleep", () => {
      assert.equal(solution.part1(data), 240);
    });
  });

  describe("Part Two", () => {
    it("Strategy 2: Guard which is most frequently asleep on the same minute", () => {
      assert.equal(solution.part2(data), 4455);
    });
  });
});
