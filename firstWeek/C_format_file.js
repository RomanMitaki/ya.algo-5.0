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
    const data = input.map(Number).slice(1);
    const combinations = new Map();
    combinations.set(0, 0);
    combinations.set(1, 1);
    combinations.set(2, 2);
    combinations.set(3, 2);
    const countPresses = (spaces) => {
        return Math.floor(spaces / 4) + combinations.get(spaces % 4);
    }
    return data.map(countPresses).reduce((acc, num) => acc + num, 0)
}