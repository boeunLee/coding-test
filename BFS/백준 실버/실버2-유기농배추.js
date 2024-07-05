const M = 10;
const N = 8;
const K = 17;

const arr = [
  [0, 0],
  [1, 0],
  [1, 1],
  [4, 2],
  [4, 3],
  [4, 5],
  [2, 4],
  [3, 4],
  [7, 4],
  [8, 4],
  [9, 4],
  [7, 5],
  [8, 5],
  [9, 5],
  [7, 6],
  [8, 6],
  [9, 6]
];

function bfs() {
  let cnt = 0;
  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];
  let queue = [];
  let place = Array(N).fill(0).map(() => Array(M).fill(0));
  let visited = Array(N).fill(0).map(() => Array(M).fill(0));
  for (let [x,y] of arr) {
    place[y][x] = 1;
  }
  for (let i = 0; i < N; i++){
    for (let j = 0; j < M; j++){
      if (place[i][j] === 1 && visited[i][j]===0) {
        queue.push([j,i]);
        visited[i][j] = 1;
        while (queue.length > 0) {
          const [x, y] = queue.shift();
          for (let k = 0; k < 4; k++){
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (0 <= nx && nx < M && 0 <= ny && ny < N) {
              if (place[ny][nx] === 1 && visited[ny][nx] === 0) {
                queue.push([nx, ny])
                visited[ny][nx] = 1;
              }
            }
          }
        }
        cnt++;
      }
    }
  }
  return cnt;
}

console.log(bfs());