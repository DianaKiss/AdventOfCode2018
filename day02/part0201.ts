'use strict';

import { testinput } from './testJSON';
import { boxInput } from './boxInput';

let twos: number = 0;
let threes: number = 0;

function countThrees(anyArray: string[]) {
  let boxLetters: string[] = [];
  for (let i: number = 0; i < anyArray.length; i++) {
    let countLetters: number[] = [];
    boxLetters = anyArray[i].split('').sort();
    console.log(boxLetters);
    
    for (let j: number = 0; j < boxLetters.length; j++) {
      if (boxLetters[j] === boxLetters[j+1] && boxLetters[j] === boxLetters[j+2]) {
        threes++;
        console.log(threes);
        break;
        }
      
    }
  }
}

function countTwos(anyArray: string[]) {
  let boxLetters: string[] = [];
  for (let i: number = 0; i < anyArray.length; i++) {
    let countLetters: number[] = [];
    boxLetters = anyArray[i].split('').sort();
    console.log(boxLetters);
    
    for (let j: number = 0; j < boxLetters.length; j++) {
      if (boxLetters[j] === boxLetters[j+1] && boxLetters[j] !== boxLetters[j-1] && boxLetters[j] !== boxLetters[j+2] ) {
        twos++;
        console.log(twos);
        break;
        }
      
    }
  }
}


countThrees(boxInput);
countTwos(boxInput);

console.log(twos * threes);
