// Name - Sumit Upadhyay
// Count the number of even and odd elements in an array:
// Input: [1, 2, 3, 4, 5]
// Output: Even: 2, Odd: 3

let arr= [1,2,3,4,5]
let oddCount=0,evenCount=0
for(let i=0;i<arr.length;i++){
if(arr[i]%2==0){
    evenCount++
}
else{
    oddCount++
}
}
console.log(evenCount , oddCount)
