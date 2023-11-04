//singleton
//onject literals
const mysym = Symbol("key1")
const JSuser={
    name:"radhakant",
    "age":21,
    location:"berhampur",
    mysym:"mykey1",
    email:"radhakant@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","wednesday","friday"]
    // in the above name,age,location,email,.... all are treated as strings
}
/*
console.log(JSuser.name);
console.log(JSuser["name"]);
console.log(JSuser["age"]);
console.log(JSuser.age);
console.log(typeof mysym)
JSuser.email="radhakant@msft.com"
console.log(JSuser.email);
Object.freeze(JSuser)
JSuser.name="sinu";
console.log(JSuser.name);
*/
JSuser.greeting=function(){
    console.log("hello radhakant");
}
//console.log(JSuser.greeting);// returns 
console.log(JSuser.greeting());// hello radhakant