// word v/s keyword   
// random collection of alphabate --> word
// collection of alphabate which has some meaning in javascript--> keyword

//           *****************+++++++++++++++++

// var let const
// var is used to ceate variable (which can store data ) but is independent of block scope
// let is also used to create variables ,but they obey block scope
// const is used to create a varible whose value can't be overwritten
 // *************************************************************************

 // hoisting - In JS variables and functions are hoisted , which means their declaration is moved to the top of code


 // primitive- string , number , boolean , null , undefined
 // reference-  [] , () , {}  
 //        *******************************************************************************

 // if  else else-if
 /*
 if (condition) {
    
 }
 */
/*
else{

}
*/
/*
else if (condition) {
    
} 
*/

// ********************************************************************************************************************

// loops - for and while
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
/*
while (condition) {
    
}
*/
for(let i=0;i<10;i++){
    //console.log(i);
}
let x=0;
while(x<10){
   // console.log(x);
    x++;
}


// ++++++++++++++++++++++++++++++++++++ function ++++++++++++++++++++++++++++++++++++++++++++++++++
function name(params) {
    
}
let userDetailsPrinter=function (name,age,id){
    /*
   console.log(`username=${name}`);
   console.log(`Age=${age}`);
   console.log(`Id=${id}`);
   */
}

userDetailsPrinter("Radhakant panda",21,"radhakant@google");


// *******************************************************arrays+++++++++++++++++++++++++++++++++++++++++++

// used to store multiple values
let array=[1,2,3,"superman"];
for(let i=0;i<4;i++){
    console.log(array[i]);
}
// push pop shift unshift slice splice


// *************************************     objects    *******************************************
var userDetails={}// empty object
var employeeDetails={
    employeeName:"saransh",
    employeeAge:45,
    employeeId:"saransh@sarasarrr.com"
}// this is a filled object
for (const key in employeeDetails) {
    console.log(`${key}=${employeeDetails[key]}`);
}
/*
employeeName=saransh
employeeAge=45
employeeId=saransh@sarasarrr.com
*/

