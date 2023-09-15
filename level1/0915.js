function solution(n) {
  let answer = []
  let list = String(n).split('')
  for(let i=list.length-1; i>=0; i--) {
      answer.push(Number(list[i]))
  }
  return answer
}

console.log(solution(12345))