function solution(s) {
    const sp = s.split(" ").map(v => Number(v));
    const sorted = sp.sort((p, c) => p - c);
    
    return `${Math.min(...sorted)} ${Math.max(...sorted)}`;
}