// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(s) {
  var answer = ''
  let arr = s.split(' ')
  for(let i=0; i<arr.length; i++) {
      let small = arr[i].split('')
      for(let j=0; j<small.length; j++) {
          let min = ''
          if(j === 0) {
              min += small[j].toUpperCase()
          } else {
            // 첫문자만 대문자이기 때문에 뒤에 대문자가 나오면 소문자로 다 바꿔주기
              min += small[j].toLowerCase()
          }
          answer += min
      }
      if(i !== arr.length-1) {
          answer += ' '
      }
  }
  return answer
}

console.log(solution("3people unFollowed me"))
console.log(solution("for the last week"))