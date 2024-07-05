const N = 5;
const K = 17;

function bfs() {
  let queue = [];
  let visited = Array(100001).fill(0);
  visited[N] = 1;
  queue.push([N,1]);
  while (true) {
    // time을 넣으면 계산하기 더 편함
    let [n,time] = queue.shift();

    for (x of [n - 1, n + 1, 2 * n]) {
      if (x === K) {
        return time;
      } else {
        if (visited[x] === 0) {
          queue.push([x, time+1]);
          visited[x] = 1;
        }
      }
    }
  }
}

console.log(bfs());