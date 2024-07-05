const N = 5;
let origin = [
  ['R', 'R', 'R', 'B', 'B'],
  ['G', 'G', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'R', 'R'],
  ['B', 'B', 'R', 'R', 'R'],
  ['R', 'R', 'R', 'R', 'R']
];

let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];

function solution() {
  let disable = Array(N).fill(null).map(() => Array(N).fill(null));
  for (let i = 0; i < N; i++){
    for (let j = 0; j < N; j++){
      if (origin[i][j] === 'G') {
        disable[i][j] = 'R';
      } else {
        disable[i][j] = origin[i][j];
      }
    }
  }

  let queue = [];
  let cnt = 0;
  let disableCnt = 0;
  let visited = Array(N).fill(0).map(() => Array(N).fill(0));

  for (let i = 0; i < N; i++){
    for (let j = 0; j < N; j++){
      if (visited[i][j] === 0) {
        queue.push([j, i]);
        visited[i][j] = 1;
        bfs(origin, visited, queue, i, j);
        cnt++;
      }
    }
  }

  visited = Array(N).fill(0).map(() => Array(N).fill(0));

  for (let i = 0; i < N; i++){
    for (let j = 0; j < N; j++){
      if (visited[i][j] === 0) {
        queue.push([j, i]);
        visited[i][j] = 1;
        bfs(disable, visited, queue, i, j);
        disableCnt++;
      }
    }
  }
  console.log(cnt, disableCnt);
}

function bfs(arr, visited, queue, i, j) {
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let k = 0; k < 4; k++){
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        if (arr[ny][nx] === arr[i][j] && visited[ny][nx] === 0) {
          queue.push([nx, ny]);
          visited[ny][nx] = 1;
        }
      }
    }
  }
}

solution();