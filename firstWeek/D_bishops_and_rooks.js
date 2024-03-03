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
    const data = input.map(str => str.trim().split(''));
    const seen = new Array();
    for (let i = 0; i < 8; i++) {
        seen.push(new Array(8).fill(false))
    }

    const destinationR = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    const destinationB = [[-1, -1], [-1, 1], [1, 1], [1, -1]];

    const isValid = (row, col) => {
        return row >= 0 && col >= 0 && row < 8 && col < 8 && data[row][col] === '*';
    }

    const moveFigure = (row, col, type) => {
        for (let [dx, dy] of type) {
            let nextRow = row + dx;
            let nextCol = col + dy;
            while (isValid(nextRow, nextCol)) {
                seen[nextRow][nextCol] = true;
                nextRow += dx;
                nextCol += dy;
            }
        }
    }

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let currCell = data[row][col];
            if (currCell === 'R') {
                seen[row][col] = true;
                moveFigure(row, col, destinationR);
            }
            if (currCell === 'B') {
                seen[row][col] = true;
                moveFigure(row, col, destinationB);
            }
        }
    }

    let ans = 0;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (!seen[row][col]) {
                ans++;
            }
        }
    }

    return ans;
}