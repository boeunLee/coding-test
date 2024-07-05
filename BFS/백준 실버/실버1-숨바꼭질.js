const N = 5;
const K = 17;

function bfs() {
  let queue = [];
  let visited = Array(100001).fill(0);
  let min = Number.MAX_SAFE_INTEGER;
  queue.push(N);
  let end = false;
  while (!end) {
    let n = queue.shift();

    for (x of [n - 1, n + 1, 2 * n]) {
      if (x === K) {
        end = true;
        break;
      }else {
        queue.push(x);
        visited[x] = visited[n] + 1;
      }
    }
    // for (let i = 0; i < visited.length; i++){
    //   if (visited[i] > 0) {
    //     console.log(i, visited[i]);
    //   }
    // }
  }
  for (let i = 0; i < visited.length; i++){
    if (visited[i] > 0) {
      min = Math.min(min, visited[i]);
    }
  }
  console.log(min+1)
}

bfs();