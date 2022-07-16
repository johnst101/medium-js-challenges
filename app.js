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
function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  timerMinutes.toString().length < 2 ? timerMinutes = `0` + timerMinutes : timerMinutes;
  timerSeconds.toString().length < 2 ? timerSeconds = `0` + timerSeconds : timerSeconds;

  return timerMinutes + `:` + timerSeconds;
}

console.log(calcTime(66));

// Q7: Find the largest number
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    arr[i] > max ? max = arr[i] : max;
  }
  return max;
}

console.log(getMax([400, 1, 600]));

// Q8: Reverse a string
function reverseString(string) {
  return string.split('').reverse().join('');
}

console.log(reverseString('Tyler'));

// Q9: Turn every element in an array into 0
function convertToZeros(arr) {
  return arr.map(elem => 0);
}

console.log(convertToZeros([5, 100, 40]));

// Q10: Filter out all the apples
function removeApples(arr) {
  return arr.filter(elem => elem !== 'Apple');
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));

// Q11: Filter out all the falsy values
function filterOutFalsy(arr) {
  return arr.filter(elem => !!elem);
}

console.log(filterOutFalsy(["", [], null, undefined, "0"]));

// Q12: Truthy to true, Falsy to false
function convertToBoolean(arr) {
  return arr.map(elem => !!elem);
}

console.log(convertToBoolean([500, 0, "Tyler", "", []]));