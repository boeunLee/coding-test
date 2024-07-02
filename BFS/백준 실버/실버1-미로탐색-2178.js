
function solution() {
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (maze[x][y] === 1) { // 1인 시작점을 만나면
        const queue = [x, y];
        
        while (queue.length) {
          visited[x][y] = 1;
          x = queue.shift();
          y = queue.shift();
          
          for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
              continue;
            }
            
            if (maze[nx][ny] === 1 && visited[nx][ny] === 0) {
              maze[nx][ny] = maze[x][y] + 1; // 이전 노드의 값에서 +1 한 값
              queue.push(nx, ny);
            }
          }
        }
      }
    }
  }
  console.log(maze[n - 1][m - 1]);
}
 
const dx = [-1, 1, 0, 0]; // 좌, 우
const dy = [0, 0, -1, 1]; // 상, 하
 
let [n, m] = [4, 6];
 
let maze = [
  [1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
];
 
let visited = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
 
solution();