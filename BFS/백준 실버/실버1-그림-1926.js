const n = 6
const m = 5
const arr = [
    [ 1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1]
]

function bfs() {
  let paper = Array(n).fill(0).map(() => Array(m).fill(0));
  for (let i = 0; i < n; i++){
    paper[i] = arr[i];
  }
  
  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];
  let queue = [];
  // 가장 넓은 그림
  let maxWidth = Number.MIN_SAFE_INTEGER;
  let cnt = 0;

  // 방문여부
  let visited = Array(n).fill(0).map(() => Array(m).fill(0));

  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      // 그림 너비
      let width = 0;
      // 도화지가 1이고 아직 방문하지 않았을때
      if (paper[i][j] === 1 && visited[i][j] === 0) {
        // 큐에 좌표 넣어줌
        queue.push([j, i]);
        // 방문 체크
        visited[i][j] = 1;
        // 너비 업데이트
        width++;
        cnt++;
      }

      // 더 이상 탐색할 그림이 없을때까지
      while (queue.length) {
        // 탐색을 조사할 좌표
        let [x, y] = queue.shift();
        for (let k = 0; k < 4; k++){
          let nx = x + dx[k];
          let ny = y + dy[k];
          if (0 <= nx && nx < m && 0 <= ny && ny < n) {
            if (paper[ny][nx] === 1 && visited[ny][nx] === 0) {
              queue.push([nx, ny]);
              width++;
              visited[ny][nx] = 1;
            }
          }
        }
      }
      // 최고 너비 갱신
      maxWidth = Math.max(maxWidth, width);
    }
  }
  console.log(cnt, maxWidth);
}

bfs();