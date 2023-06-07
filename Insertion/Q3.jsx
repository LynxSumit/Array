// Name - Sumit Upadhyay
// Write a program to insert an element in a sorted array while maintaining the sorted order of the array.
// Example: Given a sorted array `[1, 3, 5, 7]`, inserting the element 4 while maintaining the sorted order would result in `[1, 3, 4, 5, 7]`.

let arr = [1,2,3,4,6]
function InserEl(arr,newEl){
for(let i=arr.length-1;i>=0;i--){
  if(arr[i]>newEl){
    arr[i+1]=arr[i]
            arr[i]=newEl
    //   console.log(arr)
  }
  else{
    arr[i+1]=newEl
    break
  }
  if(arr[i<newEl]){
    break
  }
}
console.log(arr)
}
InserEl(arr,-1)