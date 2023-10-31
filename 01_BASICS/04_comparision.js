// *******************basic comparisions *********************************
/*
console.log(2>1);//true
console.log(2>=1);//true
console.log(2<1);//false
console.log(2<=1);//false
console.log(2!=1);//true
console.log(2==1);//false

// comparision btm different data-types
console.log("2">1);
console.log(2>="1");
console.log("2"<"1");
console.log("2"<=1);
console.log(2!="1");
console.log("2"==1);
// by default javascript understands this and converts the string to number in order to compare. 
*/

// console.log(null>0);// false

// console.log(null>=0);//true

// console.log(null==0);// false
/*
the reason is that an equality check == and the comparisions > < >= <=  work differently 
comparision convert null to a number ,treating it as zero */
// === strict check-- it checks both value and data-type

console.log("2"===2); //false
