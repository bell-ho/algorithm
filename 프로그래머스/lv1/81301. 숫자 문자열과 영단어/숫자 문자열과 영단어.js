function solution(s) {
    var answer = 0;
    
    const na = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    na.forEach((v, i) => {
        s = s.replaceAll(v, i);
    })
    return Number(s);
}