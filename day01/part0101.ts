'use strict'

export {}

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';
let filePath: string = 'dataset.txt';

let dataset: string = '';
let datasetArr: string[] = [];
let datasetNums: number[] = [];

dataset = fs.readFileSync(filePath, charEncoding);
datasetArr = dataset.split('\r\n');

for (let i: number = 0; i < datasetArr.length; i++) {
  datasetNums.push(parseInt(datasetArr[i]));
}

fs.writeFileSync('dataset.ts', datasetNums);

// function addAll(anyArray: number[]): number {
//   let allResult: number = 0;
//   for (let i: number = 0; i < anyArray.length; i++) {
//     allResult = allResult + anyArray[i];
//   }
//   return allResult;
// }

// console.log(addAll(datasetNums));

// function findDuplicate(anyArray): number {
//   let frequency: number = 0;
//   let frequenciesArr: number[] = [0];

//   for (let i: number = 0; i < anyArray.length; i++) {
//     frequency = frequency + anyArray[i];
//     // console.log('Kiscica ' + frequency);

//     for (let j: number = 0; j < frequenciesArr.length; j++) {
//       if (frequency === frequenciesArr[j]) {
//         console.log(frequency);
//         return frequency;
//         break;
//       } 
//     }

//     // console.log(frequenciesArr);
//     frequenciesArr.push(frequency);
//   }
//   findDuplicate(datasetNums);
// }

// findDuplicate(datasetNums);
