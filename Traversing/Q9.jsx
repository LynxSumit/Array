// Name- Sumit Upadhyay
// Find the second smallest element in an array:
// Input: [5, 3, 9, 2, 7]
// Output: 3

let arr = [1,2,3,4,5,6,-1]
let small=arr[0] , small2=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]<small){
        small2=small
        small=arr[i]
    }
    if(small==small2 ){
        if(arr[i]<arr[i+1]){
       small2 = arr[i]
        }
    }
   
}
console.log(small2)
