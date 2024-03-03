/*
const readline = require('readline').createInterface(
    process.stdin,
    process.stdout,
);

readline.on('line', (line) => {
    const result = solution(line);
    console.log(result);
    process.exit(0);
});
*/

function solution(input) {
    let [n, k, d] = input.split(' ').map(Number);
    const limit = String(n).length + d;
    let ans = '';
    for (let i = 0; i < 10; i++) {
        let nextN = n.toString() + `${i}`;
        if (!(nextN % k)) {
            ans = `${nextN}`;
            break;
        }
    }
    if (ans === '') return -1;
    if (ans.length === limit) return ans;
    return ans.padEnd(limit, '0');
}