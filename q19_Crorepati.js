var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var c=0
var l=0
var d=0
for (var i of kitna_paisa_hai){
    if (i>=10000000){
        c++
    }
    else if (i>=100000){
        l++
    }
    else{
        d++
    }
}
console.log("crorepati :- ", c);
console.log("lakhpati  :- ", l);
console.log("dilwale   :- ", d);
