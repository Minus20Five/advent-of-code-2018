exports.part1 = (list, sideLength = 1000) => {
  let grid = []; // 1000 x 10000 1-D array
  for (let rect of list) {
    for (let y = rect.y; y < rect.y + rect.height; y++) {
      let left = y * sideLength + rect.x;
      let right = left + rect.width;
      grid[left] = (grid[left] || 0) + 1;
      grid[right] = (grid[right] || 0) - 1;
    }
  }
  let current = 0, count = 0;
  for (let i = 0; i < sideLength ** 2; i++) {
    (v = grid[i]) && (current += v);
    current > 1 && count++;
  }
  return count;
};

overlap = (a, b) =>
  a.x < b.x + b.width &&
  a.y < b.y + b.height &&
  b.x < a.x + a.width &&
  b.y < a.y + a.height;

exports.part2 = list => {
  const map = new Map(); // Cache overlap
  for (let a of list) {
    let claim = true;
    for (let b of list) {
      if (a === b) continue;
      key = a.id < b.id ? `${a.id}.${b.id}` : `${b.id}.${a.id}`;
      if ((ovlp = map.get(key)) == undefined) {
        ovlp = overlap(a, b);
        map.set(key, ovlp);
      }
      if (ovlp) {
        claim = false;
        break;
      }
    }
    if (claim) return a.id;
  }
};
