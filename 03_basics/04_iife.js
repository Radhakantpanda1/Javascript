// Immediately Invoked Function Expression (IIFE)
(function chai(){
    //this is a named iife
    console.log(`DB CONNECTED`);
})();//DB CONNECTED

((name) => {
    console.log(`DB CONNECTED by ${name}`);
})(`sinu`);//DB CONNECTED by sinu