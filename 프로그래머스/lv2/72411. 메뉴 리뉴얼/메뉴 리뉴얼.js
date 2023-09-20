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

  const lengthGrouped = Object.keys(counts)
    .map(key => ({ str: key, cnt: counts[key] }))
    .filter((v) => v.cnt > 1)
    .sort((a, b) => b.cnt - a.cnt)
    .reduce((acc, item) => {
      const length = item.str.length;
      if (!acc[length]) {
        acc[length] = [];
      }
      const max = Math.max(...acc[length].map((v) => v.cnt));
      if (item.cnt >= max) {
        acc[length].push(item);
      }
      return acc;
    }, {});

  return [].concat(...Object.values(lengthGrouped));
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