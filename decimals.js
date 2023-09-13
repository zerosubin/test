function solution(nums){
  let answers = 0
  // 3개 숫자의 합이기 때문에 숫자 나열에서 마지막 2개는 있어야 함
  for(let i = 0; i < nums.length-2; i++){
      for(let j = i+1; j < nums.length-1; j++){
          for(let k = j+1; k < nums.length; k++){
               let sum = nums[i]+nums[j]+nums[k]
              // 소수 판별
              if(cheking(sum))
                  answers++
              }
          }
      }
  return answers
}

// 소수 판별
function cheking(num){
      for(let j = 2; j <= Math.sqrt(num); j++){
          if(num % j === 0)
              return false
      }
      return true
}

console.log(solution([1,2,3,4]))
console.log(solution([1,2,7,6,4]))