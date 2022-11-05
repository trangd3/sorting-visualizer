import { swap } from "./helper";

export default function* heapSort(arr) {
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    yield* heapify(arr, i, n);
  }

  for (let i = n - 1; i >= 0; i--) {
    swap(arr, 0, i);
    yield { i: i, j: 0, h1: arr[i], h2: arr[0] };
    yield* heapify(arr, 0, i);
  }
}

function* heapify(arr, i, n) {
  let left = 2 * i;
  let right = 2 * i + 1;
  let maxChild;
  if (right < n) {
    maxChild = arr[left] >= arr[right] ? left : right;
  } else if (left < n) {
    maxChild = left;
  } else {
    return; // no children
  }
  if (arr[i] < arr[maxChild]) {
    swap(arr, i, maxChild);
    yield { i: i, j: maxChild, h1: arr[i], h2: arr[maxChild] };
    yield* heapify(arr, maxChild, n);
  }
}
