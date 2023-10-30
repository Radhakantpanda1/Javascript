const accountId=12345
let userName="Radhakant"
var userPswd="rkprkp"
userCity="aska"// also a variable
let userState;
// if value is not assignes than it is by default undefined

/*
accountId=65896
console.log(accountId)
error value can't be changed as it is a constant
*/
/*
prefer not to use var because of issue of block scope and functional scope
*/
userName="sinu"
userPswd="sinusinu"
userCity="asika"
console.table([userName,userPswd,userCity])