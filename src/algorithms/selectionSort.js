import { swap } from "./helper";

export default function* selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      yield { i, j };
    }
    if (min !== i) {
      swap(arr, i, min);
      yield { i: i, j: min, h1: arr[i], h2: arr[min] };
    }
  }
}
