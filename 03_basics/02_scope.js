// defined inside the braces    
if(true){
    let x=25;
    const y=321;
    var z=35;
    console.log(x);
    console.log(y);
    console.log(z);
}
 //   console.log(x);//ReferenceError: x is not defined
 //   console.log(y);//ReferenceError: y is not defined
    console.log(z);//35
    // this is why it is advised to not to use var.

   // ************ more on scope ******************
   function one(){
    const userName="Radhakant Panda"
    function two(){
        const website="youtube"
        console.log(userName);
    }
        //console.log(website);//ReferenceError: website is not defined
        two();
   }
   one();

   // another example
   if(true){
    const userName="Radhakanr Panda"
    if(userName==="Radhakanr Panda"){
        const website=" ytb"
        console.log(userName+website);
    }
   }

   // +++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++
   addOne(9);
   function addOne(num){
   console.log( num+1) ;
   }
  // addTwo(15);//ReferenceError: Cannot access 'addTwo' before initialization
   const addTwo=function(num){
    console.log( num+2) ;
   }
   addTwo(15);