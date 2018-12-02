exports.part1 = list => {
  let three_count = 0;
  let two_count = 0;
  for (let string of list) {
    let map = {};
    for (let char of string) {
      map[char] = map[char] ? map[char] + 1 : 1;
    }
    const values = Object.values(map);
    if (values.includes(2)) two_count++;
    if (values.includes(3)) three_count++;
  }
  return three_count * two_count;
};

// O(n^3)
exports.part2_old = list => {
  for (let [i, current] of list.entries()) {
    memes: for (let j = i + 1; j < list.length; j++) {
      let comp = list[j];
      let diff = false;
      let index = 0;
      for (let k = 0; k < current.length; k++) {
        if (current.charAt(k) != comp.charAt(k)) {
          if (diff) {
            continue memes;
          }
          diff = true;
          index = k;
        }
      }
      if (diff) {
        return (
          current.slice(0, index) + current.slice(index + 1, current.length)
        );
      }
    }
  }
};

// O(n^2) but also same with memory
exports.part2 = list => {
  const set = new Set();
  for (let string of list) {
    for (let i = 0; i < string.length; i++) {
      let shape = string.slice(0, i) + "." + string.slice(i + 1, string.length);
      if (set.has(shape)) {
        return shape.replace(".", "");
      }
      set.add(shape);
    }
  }
};
