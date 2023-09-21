// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  // 10진수 - 3진수 - 나누고 - 뒤집고 - 붙이고
  let num = n.toString(3).split('').reverse().join('')
  // 다시 3진수를 10진수로 변환
  return parseInt(num, 3)
}

console.log(solution(45))
console.log(solution(125))