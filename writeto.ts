'use strict';

export { }

declare function require(path: string): any;
let fs = require('fs');
let boxInput: string = '';
let boxInputArr: string[] = [];

boxInput = fs.readFileSync('boxinput.txt', 'utf-8');

boxInputArr = boxInput.split('\r\n');

fs.writeFileSync('boxInput.ts', JSON.stringify(boxInputArr));
