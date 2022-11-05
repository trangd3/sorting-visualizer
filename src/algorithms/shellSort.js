export default function* shellSort(arr) {
  let n = arr.length;

  // choosing gap by halving the length of the array and flooring.
  // swapping every element to move arr[i] to arr[j]
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
        yield { i: j - gap, j: j, h1: arr[j - gap], h2: arr[j] };
      }
      arr[j] = temp;
      yield { i: i, j: j, h1: arr[i], h2: arr[j] };
    }
  }
}
