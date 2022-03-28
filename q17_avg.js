elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var e_sum=0;
var o_sum=0;
for (var i of elements){
    if(i%2===0){
        e_sum=e_sum+i
    }
    else{
        o_sum=o_sum+i
    }
}
console.log((e_sum+o_sum)/2)