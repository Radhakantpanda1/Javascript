// array
const arr = [0,1,2,3,4,5];
console.log(arr[0]);
const mry =new Array(2,4,8,6);
console.log(mry[3]);
/*
//methods in array
mry.push(9);// pushes the element into the array
console.log(mry);
mry.push(91);
mry.pop();// pops out the last element present
console.log(mry);
console.log(mry.unshift(15));//adds the element at the beginning
console.log(mry);
*/

// slice and splice
const oriArray=[1,2,3,4,5,6,7,8,9];
console.log("Original array-", oriArray);//
const sliced_Array=oriArray.slice(2,5);
console.log("sliced array-", sliced_Array);
console.log("Original array-", oriArray);
const spliced_Array=oriArray.splice(2,5);
console.log("spliced array-", spliced_Array);
console.log("Original array-", oriArray);
//the difference btn slice() and splice() is slice doesn't affect the original one while splice affects the original one.