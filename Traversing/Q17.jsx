// Name - Sumit Upadhyay
// Find the index of a specific element in an array:
// Input: [1, 2, 3, 4, 5]
// Output: Index of 3: 2

let arr = [3,5,6,4,7,7,4,45,586,43,34,33,34,234,356]
let specific_Element = 43
let index
for(let i=0;i<arr.length;i++){
if(specific_Element == arr[i]){
    index = i
    break
}
}
console.log(index)