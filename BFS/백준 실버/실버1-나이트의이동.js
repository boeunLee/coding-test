// const I = 10;
// const start = [1,1]
// const end = [1,1];
const I = 100;
const start = [0,0]
const end = [30,50];
let dx = [1, 2, 2, 1, -1, -2, -2, -1];
let dy = [-2, -1, 1, 2, 2, 1, -1, -2];

function solution() {
  let visited =Array(I).fill(0).map(() => Array(I).fill(0));
  let queue = [];
  let max = Number.MIN_SAFE_INTEGER;

  // 시작과 끝 좌표 같을 경우
  if (start[0] === end[0] && start[1] === end[1]) return 0;

  queue.push(start);

  bfs(queue, visited);

  for (let i = 0; i < I; i++){
    for (let j = 0; j < I; j++){
      max = Math.max(max, visited[i][j]);
    }
  }
  return max;
}

function bfs(queue, visited) {
    while (true) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 8; k++){
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (0 <= nx && nx < I && 0 <= ny && ny < I) {
          if (nx === end[0] && ny === end[1]) {
            return;
          } else {
            if (visited[ny][nx] === 0) {
              queue.push([nx, ny]);
              visited[ny][nx] = visited[y][x] + 1;
            }
          }
        }
      }
    }
}

console.log(solution());