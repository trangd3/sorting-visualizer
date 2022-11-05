export default function* quickSort(arr) {
  yield* sort(arr, 0, arr.length - 1);
}

function* sort(arr, left, right) {
  if (left < right) {
    let index = yield* partition(arr, left, right);
    yield* sort(arr, left, index);
    yield* sort(arr, index + 1, right);
  }
}

// Performs quick sort using Hoare's Partitioning Scheme
function* partition(arr, left, right) {
  const pivot = arr[left + Math.floor((right - left) * Math.random())];
  let i = left - 1;
  let j = right + 1;

  while (true) {
    do i++;
    while (arr[i] < pivot); // skip smaller elements on left side
    do j--;
    while (arr[j] > pivot); // skip larger elements on right side

    if (i >= j) {
      return j;
    } else {
      swap(arr, i, j);
      yield { i, j, h1: arr[i], h2: arr[j] };
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
