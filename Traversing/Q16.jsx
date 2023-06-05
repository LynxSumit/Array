// Name - Sumit Upadhyay
// Find the average of all even and odd elements in an array separately:
// Input: [1, 2, 3, 4, 5]
// Output: Even average: 3, Odd average: 3

let arr = [1, 2, 3,4,4, 4, 5,10, 6];
let sumEven = (sumOdd = countEven = countOdd = 0);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    sumEven += arr[i];
    countEven++;
  } else {
    sumOdd += arr[i];
    countOdd++;
  }
}
let AvgEven = sumEven / countEven;
let AvgOdd = sumOdd / countOdd;
console.log(AvgEven, AvgOdd);
