// Name - Sumit Upadhyay
//   Check if an array is sorted in descending order:
// Input: [5, 4, 3, 2, 1]
// Output: true

let arr = [8,7,6,5,5,-4,-5,-9]
let result = true
for(let i=1;i<arr.length-1;i++){
    // console.log(result)
    if(!(arr[i]>=arr[i+1])){
        result = false
        break
    }
}
console.log(result)