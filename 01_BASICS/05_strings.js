const myName="radhakant";// string is created 
let myAge=21;
//console.log(myName + "age is "+ myAge);
console.log(`my name os ${myName} and my age is  ${myAge}`);

// another method of making string is-
const gameName= new String('pokemon');
console.log(gameName[5]);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(5));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('p'));
const newString=gameName.substring(1,5);// negetive values not possible
console.log(newString);
const mynewString=gameName.slice(-6,0);
console.log(mynewString);
const klp="    sinu     ";
console.log(klp);
console.log(klp.trim());// trims the spaces at beginning and at ending
const utl="https//:radhakant%20panda@gmail/.com";
console.log(utl.replace('%20','#$'));
