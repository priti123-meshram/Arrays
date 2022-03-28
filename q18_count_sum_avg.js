var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var count_odd_numbers=0;
var sum_odd_numbers=0;
var sum_even_numbers=0;
var count_even_numbers=0;
for(var i of elements){
   if(i%2 ===0){
       sum_even_numbers+=i;
       count_even_numbers+=1;
   }
   else{
       sum_odd_numbers+=i;
       count_odd_numbers+=1;
   }
}
console.log(("even and odd number ka avg :- ",sum_even_numbers+sum_odd_numbers)/2);
console.log("count odd number :- ",count_odd_numbers);
console.log("count even number :- ",count_even_numbers);
console.log("sum odd number :-",sum_odd_numbers);
console.log("sum even number :- ",sum_even_numbers);



// var e_sum=0;
// var e_c=0
// var o_sum=0;
// var o_c=0
// for( var i of elements){
//     if(i%2===0){
//         e_sum=e_sum+i
//         e_c++
//     }
//     else{
//         o_sum=o_sum+i
//         o_c++
//     }
// }
// console.log("sum even - ",e_sum);
// // console.log("avg even - ",e_sum/2)
// console.log("count even - ",e_c);
// console.log("sum odd  - ",(o_sum+e_sum)/2);
// console.log("avg odd  - ",o_sum)
// console.log("count odd - ",o_c);