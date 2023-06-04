// Name - Sumit Upadhyay 
// Find the largest element in an array:
// Input: [5, 3, 9, 2, 7]
// Output: 9

let arr = [2,1,3,4,5]
let result = arr[0]
for(let i=0;i<arr.length;i++){
   if(arr[i]>result)
   result=arr[i]
}
console.log(result)