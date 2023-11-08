/*
if(condition){
   codes
}
*/
//  < , > ,<= , >= , == , != , === , 
const score=200;
if(score>200){
    console.log("power acivated");
    const power="fly";
}
else{
    console.log("power not acivated");
}

// nested if else

// 
const userLoggedIn=true;
const creditCard=true;
const googleAccount=true;
const emailAccount=false;
if(userLoggedIn&&creditCard&&(googleAccount||emailAccount)){
    console.log("you can purchase your course");
}
else{
    console.log("not sufficient data");
}
