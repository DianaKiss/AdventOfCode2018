'use strict';

export { }

declare function require(path: string): any;
let fs = require('fs');
let input: string = '';
let inputToArray: string[] = [];

input = fs.readFileSync('day07/assmblInput.txt', 'utf-8');

inputToArray = input.split('\r\n');

fs.writeFileSync('day07/assmblInput.ts', JSON.stringify(inputToArray));
