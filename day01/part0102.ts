'use strict'

import {exportedDataset} from './dataset';

let frequenciesArr: number[] = [0];
let frequency: number = 0;
let counter: number = 0;

function findDuplicate(anyArray): number {

  for (let i: number = 0; i < anyArray.length; i++) {
    frequency = frequency + anyArray[i];

    
      if (frequenciesArr.includes(frequency)) {
        console.log(frequency);
        return frequency;
        break;
      } 
    
    frequenciesArr.push(frequency);
  }
  counter++;
  console.log('repeat ' + counter);
  findDuplicate(anyArray);
}

findDuplicate(exportedDataset);
