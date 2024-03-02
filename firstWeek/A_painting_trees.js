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
    const arr = input.map(str => str.split(' ').map(Number));
    const [P, V] = arr[0];
    const [Q, M] = arr[1];

    const Vasya = [P - V, P + V];
    const Masha = [Q - M, Q + M];
    const VM = [Vasya, Masha];
    VM.sort((a, b) => a[0] - b[0]);

    const countTrees = (start, end) => {
        if (start < 0 && end < 0) {
            return Math.abs(start) - Math.abs(end) + 1
        }
        if (start >= 0 && end >= 0) {
            return Math.abs(end) - Math.abs(start) + 1
        }
        return Math.abs(start) + Math.abs(end) + 1
    }

    if (VM[0][1] >= VM[1][1]) {
        return countTrees(VM[0][0], VM[0][1]);
    }
    if (VM[0][1] >= VM[1][0]) {
        return countTrees(VM[0][0], VM[1][1]);
    }

    return countTrees(VM[0][0], VM[0][1]) + countTrees(VM[1][0], VM[1][1])
}