// Q1: Falsy or Truthy?
function falsyOrTruthy(num1, num2) {
  return !num1 ? num1 : num2;
}

console.log(falsyOrTruthy(0, 500));

// Q2: Return the length of any given array
function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3, 4]));

// Q3: Get the last element in an array
function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem(['dog', 'cat', 'ball']));

// Q4: Find the sum of an array
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));

// Q5: Add up the numbers from a single number
function progressiveSum(num3) {
  let sum = 0;
  for (let i = 1; i <= num3; ++i) {
    sum += i;
  }
  return sum;
}

console.log(progressiveSum(4));

// Q6: Calculate the time