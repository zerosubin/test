// 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// 예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

// 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
  let answer = [0 ,0]
  // 처음 길이
  let zero = 0
  
  // 숫자가 아니라 문자열 길이로 판별하기
  while (s.length > 1) {
      zero = s.length
      // 0 없앰
      s = s.split('0').join('')
      // 횟수 추가
      answer[0]++
      // 없어진 0의 개수
      answer[1] += (zero - s.length)
      // s에 이진수 다시 넣기
      s = s.length.toString(2)
  }
  return answer
}

console.log(solution("110010101001"))
console.log(solution("01110"))
console.log(solution("1111111"))