'use strict';

import { testInput } from './testInput';
import { assmblInput } from './assmblInput';

let instructionArray: any[] = [];
let firstSteps: string[] = [];
let thenSteps: string[] = [];
let steporder: string = '';

function instructionArranger(anyArray: string[]): void {
  for (let i: number = 0; i < anyArray.length; i++) {
    let instructionOrder: string[] = [];
    instructionOrder.push(anyArray[i].charAt(5));
    instructionOrder.push(anyArray[i].charAt(36));
    instructionArray.push(instructionOrder);
  }
  // instructionArray.sort();
}

function creaateStepArrays(array: any[], dest: string[], index: number) {
  for (let i = 0; i < array.length; i++) {
    dest.push(array[i][index]);
    dest.sort();
    
  } 
}


function findFirstStep() {
  for (let i = 0; i < firstSteps.length; i++) {
    
    
    //     if (thenSteps.includes(firstSteps[i])) {
      //      console.log('kiscica');
      // //       // steporder = steporder + firstSteps[i];
      //     }
    }
}




// ---***---

instructionArranger(testInput);

creaateStepArrays(instructionArray, firstSteps, 0);
creaateStepArrays(instructionArray, thenSteps, 1);

console.log(instructionArray);
console.log(firstSteps);
console.log(thenSteps);

console.log(thenSteps.includes('A', 0));