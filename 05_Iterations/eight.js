// reduce
const myCartValue=[100,200,300,400];
let myTotal=myCartValue.reduce(function (accumulator,current_value){
    return accumulator+current_value;
},0/* initial value of accumulator*/)
//console.log(myTotal);// 1000

const myShoppingCart=[
    {
        courseName:"HTML",
        price:599
    },
    {
        courseName:"CSS",
        price:599
    },
    {
        courseName:"JAVASCRIPT",
        price:3599
    },
    {
        courseName:"React.js",
        price:2599
    }
]
/*
const totalCartValue=myShoppingCart.reduce((accumulator,current_value)=> accumulator+ current_value.price,20)
   /*servive tax*/
   let myveryTotal=myShoppingCart.reduce(function (accumulator,current_value){
    return accumulator+current_value.price;
},0/* initial value of accumulator*/)
console.log(myveryTotal);