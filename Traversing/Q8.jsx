// Name - Sumit Upadhyay
// Find the second largest element in an array:
// Input: [5, 3, 9, 2, 7]
// Output: 7
let arr = [1,3,41,15,45,12]
let max=arr[0],max2
for(let i=0;i<arr.length;i++){
if(arr[i]>max ){
    max2=max
    max=arr[i]
}
if(max2<arr[i] && max>arr[i]){
    max2=arr[i]
}

}
console.log(max2)
