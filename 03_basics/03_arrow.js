const user={
    userName:"Radhakant",
    age:21,
    userMessage:function(){
        console.log(`${this.userName}, welcome to our website`)//this keyword is used for current context
        console.log(this);
    }
}

console.log(this)//{}

// if we will do console.log(this ) at browser it willn't show {} , it will show - Window 


/*
user.userMessage();//Radhakant, welcome to our website
user.userName="sinu";
user.userMessage();//sinu, welcome to our website
*/
/*
user.userMessage(); after writing this inside the userMessage function
output-{
  userName: 'Radhakant',
  age: 21,
  userMessage: [Function: userMessage]
}
*/

// ******** this inside a function++++++++++++++
/*
function hello(){
   let userName="radhakant"
    console.log(this.userName)
}
hello();//undefined for console.log(this.userName)
*/

const chai=function(){
    let userName="radhakant"
    console.log(this.userName)//undefined
    console.log(this)
}
// arrow function
const chaiii=() => {
    let userName="radhakant"
    console.log(this.userName)//undefined
    console.log(this)//{}
}
//chai();
//chaiii();
/*
const arrow_function=(parameters) => {
    return parameters;
}
*/

// explicit return
const addTwo=(num1,num2) => {
    return num1+num2;
}
console.log(addTwo(5,8));//13

//implicit return
const addThree=(num1,num2,num3) => (num1+num2+num3)// no need to write return
console.log(addThree(5,8,9));//22