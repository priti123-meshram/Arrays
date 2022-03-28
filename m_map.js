// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr)


// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr)


// const numbers = [4,9,16,25];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num / 2;
// }
// console.log(newArr)



// let a=[1,2,3,4,5,6,7,8]
// let b=a.map(a=>a*2)
// console.log(b);




// let a=[1,2,3,4,5,6,7,8]
// let b=a.filter(i=>{
//     return i%2==0;
// })
// console.log(b);



const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result)