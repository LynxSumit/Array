// Name - Sumit Upadhyay
// Write a function to insert an element at the end of an array in JavaScript.
//    Example: Given an array `[1, 2, 3]`, inserting the element 4
 //at the end would result in `[1, 2, 3, 4]`.

let arr = [1,2,3,4]
function InserEl(arr,newEl){
  return  arr[arr.length] = newEl
}
InserEl(arr,8)
console.log(arr)
