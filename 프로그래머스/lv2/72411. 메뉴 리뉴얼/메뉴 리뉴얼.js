const combinations = (str) => {
  const result = [];

  const combine = (subStr, combo) => {
    if (combo.length >= 2) {
      const v = combo.split('').sort().join('');
      if (!result.includes(v)) {
        result.push(v);
      }
    }

    for (let i = 0; i < subStr.length; i++) {
      combine(subStr.slice(i + 1), combo + subStr[i]);
    }
  };

  combine(str, '');
  return result;
};



const countOccurrences = (arr) => {
  const counts = {};

  arr.forEach(item => {
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  });

  const countArray = Object.keys(counts).map(key => ({ str: key, cnt: counts[key] }));

  const lengthGrouped = {};

  countArray.forEach(item => {
    const length = item.str.length;
    if (!lengthGrouped[length]) {
      lengthGrouped[length] = [];
    }
    lengthGrouped[length].push(item);
  });

  const maxCountByLength = {};
  for (const length in lengthGrouped) {
    let maxCount = Math.max(...lengthGrouped[length].map(item => item.cnt));
    maxCountByLength[length] = lengthGrouped[length].filter(item => item.cnt === maxCount);
  }

  const result = [];
  for (const length in maxCountByLength) {
    result.push(...maxCountByLength[length]);
  }

  return result;
};

function solution(orders, course) {
    let result = [];
    orders.forEach((menu) => {
        const mm = combinations(menu);
        result = [...result, ...mm];
    });
    return countOccurrences(result)
        .filter((v) => v.cnt > 1).map((v) => v.str)
        .sort()
        .filter((v) => course.includes(v.length));
}