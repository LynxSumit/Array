// Name - Sumit Upadhyay
// Implement a function to insert an element at a specific index in an array. Make sure to shift the existing elements to accommodate the new element.
// Example: Given an array `[1, 2, 4]`, inserting the element 3 at index 2 would result in `[1, 2, 3, 4]`.

let arr = [4,5,6,7,8]
function InserEl(arr,newEl,index){
    for(let i=arr.length-1; i>=0; i--){
        if(index>arr.length || index<0){
            console.log("Please Enter the valid index number")
            return
        }
        if(i>=index){
            arr[i+1]=arr[i]
            if(i==index){
                arr[i]=newEl
            }
        }
    }
    console.log(arr)
}
InserEl(arr,90,1)