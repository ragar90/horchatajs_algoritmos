const _ = require('lodash');
const totalNumbers = 100000;
let array = new Array(totalNumbers).fill(0).map((number) => {
  return Math.floor(Math.random() * 10000 + 1);
})
array = _.shuffle(array)

function quicksort(array, leftIndex, rightIndex) {
  if (array.length > 1) {
    let pivotIndex = partition(array, leftIndex, rightIndex)
    if (leftIndex < pivotIndex - 1){
      quicksort(array, leftIndex, pivotIndex - 1)
    }
    if (rightIndex > pivotIndex) {
      quicksort(array, pivotIndex, rightIndex)
    }
  }
  return array
}

function partition(array, leftIndex, rightIndex) {
  const pivotIndex = Math.floor((leftIndex + rightIndex) / 2);
  let pivot = array[pivotIndex]
  let i = leftIndex;
  let j = rightIndex;
  while (i <= j) { // Hasta que se encuentren o lleguen al pivote
    while (array[i] < pivot) { i++ } //Incrementar puntero izquierdo hasta encontrar un numero mayor al pivote
    while (array[j] > pivot) { j-- } //Incrementar puntero derecho hasta encontrar un numero menor al pivote
    if(i <= j){
      swap(array, i, j)
      i++;
      j--;
    }
  }
  return i;// En este momento i = pivotIndex

}

function swap(array, leftIndex, rightIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

function bublesort(bublesortArray) {
  let swapped = null;
  do {
    swapped = false;
    for (let i = 0; i < bublesortArray.length - 1 ; i++) {
      let nextOne = i + 1
      if (bublesortArray[i] > bublesortArray[nextOne]){
        let temp = bublesortArray[i];
        bublesortArray[i] = bublesortArray[nextOne];
        bublesortArray[nextOne] = temp;
        swapped = true
      }
    }
  } while (swapped);
}



console.time('quicksort timer')
quicksort(array, 0, array.length - 1)
console.timeEnd('quicksort timer')

let array2 = _.shuffle(array)

console.time('bublesort timer')
bublesort(array2)
console.timeEnd('bublesort timer')