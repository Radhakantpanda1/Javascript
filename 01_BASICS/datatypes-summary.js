// datatype is of 2 types primitive and non- primitive it is classified on the basis of how it is stored in memory and called 
/*  primitive/reference type
 String 
 Number
 Boolean 
 null
 undefined 
 symbol
 BigInt
 */
// non-primitive
/*
arrays
objects
functions
*/
// javascript is dynamically typed 
const id=Symbol('1436');
const newId=Symbol('1436');
console.log(typeof id);// symbol
console.log(typeof newId);//symbol
console.log(id===newId);// false

console.log(typeof 25.36);// number