function solution(arr) {
  var answer = 0;

  answer = arr.reduce((arr, crr) => arr + crr, 0) / arr.length;


  return answer;
}