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
    const data = input[1].split(" ").map(Number);

    const isOdd = (num) => {
        return num % 2 !== 0 ? 1 : 0;
    };

    const mappedData = data.map(isOdd);

    let ans = new Array(mappedData.length - 1).fill(null);
    let mappedData2 = [];
    for (let i = 0; i < mappedData.length; i++) {
        let num = mappedData[i];
        if (mappedData[i + 1] === undefined) {
            mappedData2.push(num);
            continue;
        }
        let counter = 1;
        let pushed = false;
        while (num === mappedData[i + counter]) {
            ans[i + counter - 1] = "x";
            if (!pushed) {
                mappedData2.push(mappedData[i] === 1 ? 1 : 0);
                pushed = true;
            }
            counter++;
        }
        if (counter > 1) {
            i += counter - 1;
        } else {
            mappedData2.push(num);
        }
    }
    //console.log(mappedData2)
    //console.log(ans)
    //if begins with even
    if (mappedData2[0] === 0) {
        if (mappedData2.length % 2 === 0) {
            //length is even
            if ((mappedData2.length / 2) % 2 === 0) {
                //pairs is even
                for (let i = 0; i < ans.length; i++) {
                    let idx = ans.lastIndexOf(null);
                    if (!ans[i]) {
                        if (i === idx) {
                            ans[i] = "+";
                        } else {
                            ans[i] = "x";
                        }
                    }
                }
            } else {
                //pairs is odd
                for (let i = 0; i < ans.length; i++) {
                    if (!ans[i]) {
                        ans[i] = "+";
                    }
                }
            }
        } else {
            //length is odd
            if (Math.floor(mappedData2.length / 2) % 2 === 0) {
                //pairs is even
                let counter = 1;
                for (let i = 0; i < ans.length; i++) {
                    if (!ans[i]) {
                        if (counter < 3) {
                            ans[i] = "+";
                            counter++;
                        } else {
                            ans[i] = "x";
                        }
                    }
                }
            } else {
                //pairs is odd
                for (let i = 0; i < ans.length; i++) {
                    if (!ans[i]) {
                        ans[i] = "+";
                    }
                }
            }
        }
    } else {
        //begins with odd
        if (mappedData2.length % 2 === 0) {
            //length is even
            if ((mappedData2.length / 2) % 2 === 0) {
                //pairs is even
                let counter = 1;
                for (let i = 0; i < ans.length; i++) {
                    if (!ans[i]) {
                        if (counter < 2) {
                            ans[i] = "+";
                            counter++;
                        } else {
                            ans[i] = "x";
                        }
                    }
                }
            } else {
                //pairs is odd
                for (let i = 0; i < ans.length; i++) {
                    if (!ans[i]) {
                        ans[i] = "+";
                    }
                }
            }
        } else {
            //length is odd
            if (Math.floor(mappedData2.length / 2) % 2 === 0) {
                //pairs is even
                for (let i = 0; i < ans.length; i++) {
                    if (!ans[i]) {
                        ans[i] = "+";
                    }
                }
            } else {
                //pairs is odd
                for (let i = 0; i < ans.length; i++) {
                    let idx = ans.lastIndexOf(null);
                    if (!ans[i]) {
                        if (i === idx) {
                            ans[i] = "x";
                        } else {
                            ans[i] = "+";
                        }
                    }
                }
            }
        }
    }
    return ans.join("");
}