// pseudocode from https://panthema.net/2013/sound-of-sorting/SoS-CheatSheet.pdf
export default function* radixSort(arr) {
  let k = 4;
  // finds the # of digits of the array's max number using log change of base
  let d = Math.ceil(Math.log(getMax(arr) + 1) / Math.log(k));
  let copy = arr.slice();
  for (let p = 0; p < d; p++) {
    let base = Math.pow(k, p);
    let count = [];
    count.length = d;
    count.fill(0);

    // counts how many elements are in a certain digit
    for (let i = 0; i < arr.length; i++) {
      count[Math.floor(arr[i] / base) % k]++;
    }

    // prefix sum (running sum)
    for (let i = 1; i < d; i++) {
      count[i] += count[i - 1];
    }

    // put in element in the respective position of the count array and then decrement
    for (let i = arr.length - 1; i >= 0; i--) {
      copy[count[Math.floor(arr[i] / base) % k] - 1] = arr[i];
      count[Math.floor(arr[i] / base) % k]--;
    }

    // copy it over to original array
    for (let i = 0; i < arr.length; i++) {
      arr[i] = copy[i];
      yield { i: i, h1: arr[i] };
    }
  }
}
/*
  export function* radixSort(arr) {
    let m = getMax(arr);
    let copy = arr.slice();
    let digit = 1;
    while (Math.floor(m / digit) > 0) {
      // 10 spots in count for 0-9, all initialized with a count of 0
      let count;
      (count = []).length = 10;
      count.fill(0);
  
      // count how many elements have a certain digit in the digit's place
      for (let i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / digit) % 10]++;
      }
  
      // Prefix sum
      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
      }
  
      // put in element in the respective position of the count array and then decrement
      for (let i = arr.length - 1; i >= 0; i--) {
        copy[count[Math.floor(arr[i] / digit) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / digit) % 10]--;
      }
  
      // copy it over to original array
      for (let i = 0; i < arr.length; i++) {
        arr[i] = copy[i];
        yield { i: i, h1: arr[i] };
      }
      digit *= 10;
      console.log(arr);
    }
  }
  */
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
