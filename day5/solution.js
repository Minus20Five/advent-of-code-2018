exports.part1 = polymer => reducePolymer(polymer).length;

function reducePolymer(polymer) {
  for (let i = 0; i < polymer.length - 2; i++) {
    if (Math.abs(polymer.charCodeAt(i) - polymer.charCodeAt(i + 1)) === 32) {
      polymer = `${polymer.slice(0, i)}${polymer.slice(i + 2)}`;
      i -= 2;
    }
  }
  return polymer;
}

exports.part2 = polymer => {
  polymer = reducePolymer(polymer);

  return Array(26)
    .fill()
    .map((letter, index) => {
      const regex = new RegExp(String.fromCharCode(index + 65), "gi");
      return reducePolymer(polymer.replace(regex, "")).length;
    })
    .reduce((acc, cur) => (cur < acc ? cur : acc));
};
