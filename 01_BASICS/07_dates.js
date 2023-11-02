//dates 
/*
let myDate = new Date();
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.getTimezoneOffset());
console.log(myDate);
*/
/*
let myCreatedDate= new Date(2023 , 0 , 25);
console.log(myCreatedDate);
console.log(myCreatedDate.toString());
*/
/*
let myCreatedDate= new Date("2-10-2023");//mm-dd-yy
console.log(myCreatedDate.toLocaleString());
*/
/*
let myTimeStamp = Date.now();
console.log(myTimeStamp);//16988888885869  THIS VALUE IS IN MILLI SECONDS
let myCreatedDate= new Date("2-10-2023");//mm-dd-yy
console.log(myCreatedDate.getTime());//1675987200000 ALSO IN MILLI SECONDS
// THE VALUES GENERATED IN MILLI SECONDS CAN BE USED TO COMPARE.
console.log(Math.floor(Date.now()/1000));// value in seconds
*/
let myDate = new Date();
console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());
console.log(myDate.getTime());