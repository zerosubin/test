// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
  var answer = 0
  // 제곱근 구함
  let number = Math.sqrt(n)
  // 정수 판별
  if(Number.isInteger(number)) {
      answer = (number+1) * (number+1)
  } else {
      answer = -1
  }
  return answer
}

console.log(solution(121))
console.log(solution(3))