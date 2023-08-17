function solution(n, arr1, arr2) {
    var answer = [];
    
    const strings1 = parseShape(arr1,n);
    const strings2 = parseShape(arr2,n);
    
    const a1 = [];

    for (let i = 0; i < strings1.length; i++) {
        let aa = [];
        const a = strings1[i].split("");
        const b = strings2[i].split("");

        for (let i = 0; i < a.length; i++) {
            const pa = Number(a[i]);
            const pb = Number(b[i]);

            if (!pa && !pb) {
                aa.push(" ");
            } else if (pa || pb) {
                aa.push("#")
            }
        }
        a1.push(aa.join(""));
    }
    
    return a1;
}

const parseShape = (arr,n) =>
    arr.map((v) =>
        v.toString(2).split("").join(""))
        .map((v) => {
            if (v.length !== n) {
                return v.padStart(n, "0");
            } else {
                return v;
            }
        });