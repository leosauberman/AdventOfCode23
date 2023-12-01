import * as fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf-8').split("\n");

const findFirstAndLastDigits = (str: string): number => {
    let firstDigit: string, lastDigit: string;
    firstDigit = lastDigit = '';
    str.split('').forEach((el) => {
            if(!Number.isNaN(parseInt(el))) {
                if(!firstDigit) firstDigit = el;
                lastDigit = el;
            }
        });

    if(!lastDigit) lastDigit = firstDigit;
    return parseInt(firstDigit + lastDigit);
}


const result = input.reduce((prev, curr) =>  curr ? prev + findFirstAndLastDigits(curr) : prev, 0);
console.log(result);
