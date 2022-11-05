export default function* insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j);
      yield { i: j - 1, j: j, h1: arr[j - 1], h2: arr[j] };
      j--;
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
