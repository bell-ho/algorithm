function solution(s) {
    const sp = s.replaceAll("{", "").replaceAll("}", "");
    const numbers = sp.split(",").map(v => Number(v)).sort();
    const reduce = numbers.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc
    }, {});
    
    return Object.entries(reduce).sort((a, b) => b[1] - a[1]).map(v => Number(v[0]));
}