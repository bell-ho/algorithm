function solution(id_list, report, k) {
    var answer = [];
    
    const reportParse = report.map(v => v.split(" ")).map((v) => ({name: v[0], value: v[1]}));
    const listParse = id_list.map((id) => {
        const list = reportParse.filter((v) => v.name === id)
                .map(v => v.value);
            return {name: id, list: [...new Set(list)], result: 0};
    });
    
    const cnt = Object.entries(listParse.map(v => v.list).flat()
        .reduce((accu, curr) => {
            accu[curr] = (accu[curr] || 0) + 1;
            return accu;
        }, {})).filter((v) => v[1] >= k).map(v => v[0]);
    
    listParse.forEach((v) => {
        cnt.forEach(c => {
            if (v.list.includes(c)) {
                v.result += 1;
            }
        })
    })
    
    return listParse.map(v => v.result);
}