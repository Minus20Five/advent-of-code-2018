exports.part1 = events => {
  let map = {}; // GuardNum -> {time, intervals}
  let sleepiest, totalSleepTime = 0;
  let id, start;
  for ({ event, guardNum, minutes } of events) {
    if (event.includes("Guard")) {
      id = guardNum;
      if (!map.hasOwnProperty(id)) map[id] = { time: 0, intervals: [] };
    } else if (event.includes("asleep")) {
      start = minutes;
    } else if (event.includes("wakes")) {
      let total = (map[id].time += minutes - start);
      map[id].intervals.push([start, minutes]);
      total > totalSleepTime && ((sleepiest = id), (totalSleepTime = total));
    }
  }

  let hourTable = {};
  let sleepyHour, sleepyHourFreq = 0;
  for (let [start, end] of map[sleepiest].intervals) {
    for (let i = start; i < end; i++) {
      let freq = (hourTable[i] = (hourTable[i] || 0) + 1);
      freq > sleepyHourFreq && ((sleepyHour = i), (sleepyHourFreq = freq));
    }
  }

  return sleepiest * sleepyHour;
};

exports.part2 = events => {
  let map = {}; //GuardNum -> {*minute*: freq}
  let guard, maxMin, maxFreq = 0;
  let id, start;
  for ({ event, guardNum, minutes } of events) {
    if (event.includes("Guard")) {
      id = guardNum;
      if (!map.hasOwnProperty(id)) map[id] = {};
    } else if (event.includes("asleep")) {
      start = minutes;
    } else if (event.includes("wakes")) {
      for (let i = start; i < minutes; i++) {
        let freq = (map[id][i] = (map[id][i] || 0) + 1);
        freq > maxFreq && ((guard = id), (maxMin = i), (maxFreq = freq));
      }
    }
  }
  return guard * maxMin;
};
