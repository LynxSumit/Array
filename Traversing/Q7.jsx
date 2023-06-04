// Name  - Sumit Upadhyay
// Find the average of all elements in an array:
// Input: [1, 2, 3, 4, 5]
// Output: 3

let arr = [1,2,3,4,5]
let avg,sum=0,count=0
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    count++
}
avg = sum/count
console.log(avg)