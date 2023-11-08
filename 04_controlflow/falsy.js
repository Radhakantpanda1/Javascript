/*
falsy values
false
0
-0
0n
null
undefined
NaN
""
*/
/*
truthy values
1
[]
"0"
"false"
" "
{}
function (){}-->empty function
*/

// false ==0  //true
// false == ''//true
// 0=='' //true

// Nullish Coalescing Operator ??  : null undefined

let val1;
val1=null ?? 15;
console.log(val1);
let val2=null ?? 15;

console.log(val2);

// ternary operator
// condition?true:false;