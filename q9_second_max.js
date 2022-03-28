// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max_num=0;
// for(var i=0; i in numbers; i++){
//     if (numbers[i]>max_num){
//        max_num=numbers[i]
 
//    }
// }
// console.log(max_num)


var numbers= [59, 40, 23, 70, 56, 12, 5, 10, 7]
var max=numbers[0]
var b=0
for(var i=0; i in numbers; i++){
    if (max<numbers[i]){
        if (b<max){
            b=max
        }
        max=numbers[i]
    }
    // else{
    //     if(b<max){
    //         b=numbers[i]
    //     }
    // }
}


console.log(b)


        
   