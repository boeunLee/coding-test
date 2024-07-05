const m = 6;
const n = 4;
let arr = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1]];

function bfs() {
  let tomato = Array(n).fill(0).map(() => Array(m).fill(0));

  for (let i = 0; i < n; i++){
    tomato[i] = arr[i];
  }
  let queue = [];
  let max = Number.MIN_SAFE_INTEGER;
  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];
  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      if (tomato[i][j] === 1) {
        queue.push([j, i]);
      }
    }
  }
  while (true) {
    let [x, y] = queue.shift();
    for (let k = 0; k < 4; k++){
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        if (tomato[ny][nx] === 0) {
          tomato[ny][nx] = tomato[y][x] + 1
          queue.push([nx, ny]);
        }
      }
    }
    if (queue.length === 0) break;
  }
  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      max = Math.max(max, tomato[i][j] - 1);
    }
  }
  console.log(max);
}

bfs();