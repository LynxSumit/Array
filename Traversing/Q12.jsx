// Name - Sumit Upadhyay
// Find the sum of all even and odd elements in an array separately:
// Input: [1, 2, 3, 4, 5]
// Output: Even sum: 6, Odd sum: 9

let arr = [1,2,23,345,7,34,7,45,23,58,8,43,2,67]
let odd=0,even=0
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even+=arr[i]
        console.log(even)
    }else{
        odd+=arr[i]
    }
}
console.log("Sum of odd numbers is : "+ odd)
console.log("Sum of even numbers is : "+ even)