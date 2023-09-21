// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

function solution(n) {
  var answer = 0
  
  for(let i=0; i<=n; i++) {
    // n의 약수이면서 홀수인 수
      if ( n % i === 0 && i % 2 === 1 ) {
          answer++
      }
  }
  return answer
}

// 1 3 5 15 -> 4개
// 1 3 9

console.log(solution(15))  // 4
console.log(solution(9))  // 3
console.log(solution(28))  