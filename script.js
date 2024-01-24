// 1. Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
function compareNumbers(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
}
const result1 = compareNumbers(5, 9);
const result2 = compareNumbers(14, 2);
const result3 = compareNumbers(3, 3);
console.log(result1, result2, result3);

// 2. Write a function that counts the factorial of a given number.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const result = factorial(10);
console.log(result);

// 3. Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
function combineDigits(digit1, digit2, digit3) {
  if (isValidDigit(digit1) && isValidDigit(digit2) && isValidDigit(digit3)) {
    const combinedNumber = Number(`${digit1}${digit2}${digit3}`);
    return combinedNumber;
  } else {
    console.log("Invalid input");
    return null;
  }
}
function isValidDigit(digit) {
  return Number.isInteger(digit) && digit >= 0 && digit <= 9;
}
const theNumber = combineDigits(1, 4, 9);
console.log(theNumber);

// 4.  Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square.
function calculateArea(width, length) {
  if (length === undefined) {
    return width * width;
  } else {
    return width * length;
  }
}
const areaSquare = calculateArea(10);
const areaRectangle = calculateArea(10, 20);
console.log(areaSquare, areaRectangle);

// 5. Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
function isPerfectNumber(number) {
  if (number <= 1) {
    return false;
  }
  let sum = 1;
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      sum += divisor;
      if (divisor !== number / divisor) {
        sum += number / divisor;
      }
    }
  }
  return sum === number;
}
console.log(isPerfectNumber(28));

// 6. Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
function formatTime(hours, minutes, seconds) {
  hours = hours || 0;
  minutes = minutes || 0;
  seconds = seconds || 0;
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedTime =
    "${formattedHours}:${formattedMinutes}:${formattedSeconds}";
  return formattedTime;
}
console.log(formatTime(10, 30, 0));

// 7. Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
function timeToSeconds(hours, minutes, seconds) {
  hours = hours || 0;
  minutes = minutes || 0;
  seconds = seconds || 0;
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds;
}
console.log(timeToSeconds(10, 59, 30));

// 8. Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
function secondsToTime(seconds) {
  seconds = seconds || 0;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  const formattedTime =
    "${formattedHours}:${formattedMinutes}:${formattedSeconds}";
  return formattedTime;
}
console.log(secondsToTime(6666));
