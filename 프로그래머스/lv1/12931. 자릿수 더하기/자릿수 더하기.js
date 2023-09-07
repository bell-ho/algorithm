function solution(n)
{
    var answer = 0;
    n.toString().split("").forEach((v)=>{
        answer += Number(v)
    })
    
    return answer;
}