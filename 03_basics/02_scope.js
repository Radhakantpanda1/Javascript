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