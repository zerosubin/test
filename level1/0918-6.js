// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
  var answer = ''
  if(n % 2 === 0) {
      let num = n / 2
      for(let i=1; i<=num; i++) {
          answer += '수박' 
      }
  } else {
      let num = Math.floor(n / 2)
      for(let i=1; i<=num; i++) {
          answer += '수박'
      }
      answer += '수'
  }
  return answer
}

console.log(solution(3))
console.log(solution(4))
console.log(solution(18))
console.log(solution(23))
