function solution(s){
  let p = 0
  let y = 0
  let list = s.split('')
  for(let i=0; i<list.length; i++) {
      if((list[i] === 'p') || (list[i] === 'P')) {
          p++
      } else if ((list[i] === 'y') || (list[i] === 'Y')) {
          y++
      }
  }
  if(p !== y) {
      return false
  } else {
      return true
  }
}

console.log(solution("Pyy"))