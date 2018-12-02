exports.part1 = list => list.reduce((acc, cur) => acc + cur, 0);

exports.part2 = list => {
  const set = new Set([0]);
  let index = 0;
  let val = 0;
  while (true) {
    val += list[index++ % list.length];
    if (set.has(val)) {
      return val;
    }
    set.add(val);
  }
};
