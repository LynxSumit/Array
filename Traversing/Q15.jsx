// Name - Sumit Upadhyay
// Find the product of all elements in an array:
// Input: [1, 2, 3, 4, 5]
// Output: 120

let arr = [2,3,4,6,-5]
let result = 1
for(let i=0;i<arr.length;i++){
    result*=arr[i]
}
console.log(result)