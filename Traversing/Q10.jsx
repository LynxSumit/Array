// Name - Sumit Upadhyay
// Check if an array is sorted in ascending order:
// Input: [1, 2, 3, 4, 5]
// Output: true

let arr = [-245,921,1031,1031,4100,100000]
let result = true

for(let i=1;i<arr.length-1;i++){
    if(!(arr[i]<=arr[i+1])){
        result = false
        break
    }
}
console.log(result)