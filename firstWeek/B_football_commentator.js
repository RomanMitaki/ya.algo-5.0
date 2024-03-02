/*
const input = [];

const readline = require('readline').createInterface(
    process.stdin,
    process.stdout,
);

readline
    .on('line', (line) => {
        input.push(line);
    })
    .on('close', () => {
        const result = solution(input);
        console.log(result);
        process.exit(0);
    });
*/

function solution(input) {
    const arr = input.map(str => str.split(':').map(Number));
    let sum1 = arr[0][0] + arr[1][0];
    let sum2 = arr[0][1] + arr[1][1];
    if (sum2 - sum1 < 0) return 0;
    if (arr[2][0] === 1) {
        if (arr[1][0] + (sum2 - sum1) > arr[0][1]) return sum2 - sum1;
        return sum2 - sum1 + 1;
    } else {
        if (arr[1][1] >= arr[0][0]) return sum2 - sum1 + 1;
        return sum2 - sum1;
    }
}