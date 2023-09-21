// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s) {
  var answer = ''
  let list = s.split(' ')
  for(let i=0; i<list.length; i++) {
      let a = list[i].split('')
      for(let j=0; j<a.length; j++) {
          if((j === 0) || (j % 2 === 0)) {
              answer += a[j].toUpperCase()
          } else {
              answer += a[j].toLowerCase()
          }
      }
      if(i !== list.length-1) {
          answer += ' '   
      }
  }
  return answer
}

console.log(solution("try hello world"))