// Name - Sumit Upadhyay
// Count the number of occurrences of a specific element in an array:
// Input: [1, 2, 3, 2, 4, 2, 5]
// Output: Occurrences of 2: 3



let arr =  [1,2,3,4,4,2,342,45,3245,32,345,432,345,432,45323222,34,323,2,2,2,2,4,57,6,5,64,3,54,5,6,767,7,56,5,4,3,33,4,6,6543,55]
let number = 6
// number = parseInt(number)
let count=0
for(let i=0;i<arr.length;i++){
if(arr[i]==number){
    count++
}}
console.log("Occurence of " + number  + " : " + count)