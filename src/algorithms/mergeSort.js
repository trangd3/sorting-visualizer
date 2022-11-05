export default function* mergeSort(arr) {
  yield* sort(arr, 0, arr.length - 1, arr.slice());
}

function* sort(arr, left, right, temp) {
  if (right > left) {
    let mid = Math.floor(left + (right - left) / 2);
    yield* sort(temp, left, mid, arr);
    yield* sort(temp, mid + 1, right, arr);
    yield* merge(arr, left, mid, right, temp);
  }
}

function* merge(arr, left, mid, right, temp) {
  let i = left;
  let j = mid + 1;
  let k = left;
  // Alternate between i & j to get next smallest element.
  while (i <= mid && j <= right) {
    if (temp[i] <= temp[j]) {
      yield [k, temp[i]];
      arr[k++] = temp[i++];
    } else {
      yield [k, temp[j]];
      arr[k++] = temp[j++];
    }
  }
  // Iterate through any leftovers in both arrays.
  while (i <= mid) {
    yield [k, temp[i]];
    arr[k++] = temp[i++];
  }
  while (j <= right) {
    yield [k, temp[j]];
    arr[k++] = temp[j++];
  }
}

/*
  // VERSION WITHOUT TEMP ARRAY
  export function* mergeSort(arr) {
    yield* sort(arr, 0, arr.length - 1);
  }
  
  function* sort(arr, left, right) {
    if (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      yield* sort(arr, left, mid);
      yield* sort(arr, mid + 1, right);
      yield* merge(arr, left, mid, right);
    }
  }
  
  function* merge(arr, left, mid, right) {
    let i = left,
      j = mid + 1;
    if (arr[mid] > arr[j]) {
      while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
          i++;
        } else {
          // put arr[j] in front of everything between i and j
          const temp = arr[j];
          let index = j;
  
          while (index !== i) {
            arr[index] = arr[index - 1];
            yield { i: index - 1, j: index, h1: arr[index - 1], h2: arr[index] };
            index--;
          }
          arr[i] = temp;
          yield { i: i, j: i + 1, h1: arr[i], h2: arr[i + 1] };
  
          i++;
          mid++;
          j++;
        }
      }
    }
  }
  */
