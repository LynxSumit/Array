// Name - Sumit Upadhyay
// Implement a function to insert multiple elements at the end of an array in a single operation.
//    Example: Given an array `[1, 2, 3]`, inserting the elements `[4, 5]` at the end would result in `[1, 2, 3, 4, 5]`.
let arr  = [1,2,3,4]
let arrI = [5,6,7]
function InsertEl(arr,arrI) {
    for(let i = 0; i<arrI.length; i++){
        console.log(arr)
      arr[arr.length] = arrI[i]
      
         }
}
InsertEl(arr,arrI)
console.log(arr)