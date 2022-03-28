var n=['m','a','l','a','y','a','l','a','m'];
// var new_array=[];
// for (var i=Name.length-1; i>=0;i--){
//    new_array.push(Name[i]);
// }
// var count=0;
// for (var j=0; j=Name.length1; i--){   
//     if (new_array[j]===Name[j]){
//        count++;
//    }
// }
// if(count===Name.length){
//    console.log("This is palindrome");
// }else{
//    console.log("This is not a palindrome");
// }


// var n="RADAR"
var b=[]
var a=""
var i=n.length-1
while (i>=0){
   a=a+(n[i])
   b.push(a)
   i--
}
if (n===b){
   console.log("it is palindram")
}
else{
   console.log("it is not palindram")
}