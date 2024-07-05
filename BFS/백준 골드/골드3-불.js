const R = 4;
const C = 4;
const arr = [["#", "#", "#", "#"], ["#", "J", "F", "#"], ["#", ".", ".", "#"], ["#", ".", ".", "#"]];

function bfs() {
  let queue = [];
  let move = [];
  let visited = Array(R).fill(-1).map(() => Array(C).fill(-1));
  for (let i = 0; i < R; i++){
    for (let j = 0; j < C; j++){
      if (arr[i][j] === "F") {
        queue.push([j, i]);
        visited[i][j] = 0;
        break;
      } else if (arr[i][j] === "J") {
        move.push([j, i]);
      }
    }
  }

  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];
  while (queue.length>0) {
    const [x, y] = queue.shift();
    for (let k = 0; k < 4; k++){
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < C && ny >= 0 && ny < R) {
        if (visited[ny][nx] === -1 && arr[ny][nx]!=="#") {
          visited[ny][nx] = visited[y][x] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  let i = 0, cnt = 0;
  let end = false;
  while (!end) {
    i++;
    const [x, y] = move.shift();
    for (let k = 0; k < 4; k++){
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx < 0 || nx >= C || ny < 0 || ny >= R) {
        end = true;
        cnt++;
        break;
      }
      if (visited[ny][nx] <= i || visited[ny][nx]===-1) {
        // 여기 못감
        continue;
      } else {
        // 여기로 이동
        move.push([nx, ny]);  
        cnt++;
      }
    }
  }
  console.log(cnt);
}
bfs();