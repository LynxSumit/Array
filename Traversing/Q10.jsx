// Name - Sumit Upadhyay
// Check if an array is sorted in ascending order:
// Input: [1, 2, 3, 4, 5]
// Output: true

let arr = [-11,21,31,41,-1]
let result
for(let i=0;i<arr.length-1;i++){
    result = arr[i]<arr[i+1] && arr[i]>arr[i-1]
}
console.log(result)