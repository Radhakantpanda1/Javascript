function myname(){// function is the keyword 
    console.log("Radhakant Panda");
}
myname();// myname is reference and () is used to call
function addnum(num1,num2){
   let res= num1+num2;
   return res;
}
console.log(addnum(3,7))

function userLoginMessage(userName){
    return `${userName} just logged in`;
}
console.log(userLoginMessage("Radhakant Panda")) //Radhakant Panda just logged in
/*
function calculateCartPrice(num1){
 return num1;
}
console.log(calculateCartPrice(100,200,300))// 100
*/
function calculateCartPrice(...num1){
    return num1;// ...num is 
   }
   console.log(calculateCartPrice(100,200,300))//[ 100, 200, 300 ] stored in an array

   const userDetails={
    userName:"Radhakant Panda",
    age:21

   }
   function userDetailPrint(any_object){
    console.log(`username is ${any_object.userName} and age is ${any_object.age}`);
   }
   userDetailPrint(userDetails);