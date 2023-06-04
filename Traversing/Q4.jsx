// Name - Sumit Upadhyay
// Find the smallest element in an array:
// Input: [5, 3, 9, 2, 7]
// Output: 2

let arr = [102,3,43]
let result = arr[0]
for(let i = 0; i<arr.length;i++)
{
    if(arr[i]<result){
        result  = arr[i]
    }
}
console.log(result)