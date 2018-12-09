'use strict';

import { testInput } from './testInput';
import { assmblInput } from './assmblInput';

let instructionArray = [];
let nextStepArray = [];

function instructionArranger(anyArray: string[]): void {
  for (let i: number = 0; i < anyArray.length; i++) {
    let instructionOrder: string[] = [];
    instructionOrder.push(anyArray[i].charAt(5));
    instructionOrder.push(anyArray[i].charAt(36));
    instructionArray.push(instructionOrder);
  }
}

function findFirstStep() {
  for (let i: number = 0; i < instructionArray.length; i++) {
    for (let j: number = 0; j < instructionArray.length; j++) {
      if (instructionArray[i][0] !== instructionArray[j][1]) {
        let nextLetter: string = instructionArray[i][0];
        if (nextLetter !== nextStepArray[nextStepArray.length - 1]) {
          nextStepArray.push(nextLetter);
        }

      }
    }
  }
}



function findNextStep() {

}



instructionArranger(testInput);
console.log(instructionArray);

findFirstStep();

console.log(nextStepArray);

// for (let i: number = 0; i < 26; i++) {
//   console.log(String.fromCharCode(65 + i));
// }

