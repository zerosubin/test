// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

process.stdin.setEncoding('utf8');
// 입력값 받고
process.stdin.on('data', data => {
  // 공백을 기준으로 나누기
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i=0; i<b; i++) {
      // 3줄 
        let list = ''
        for(let j=0; j<a; j++) {
          // 줄마다 추가
            list += '*'
        }
        console.log(list);
    }
});

// 입력
// 5 3

// 출력
// *****
// *****
// *****