const value=500;
console.log(value);// it is identified as a number
const score = new Number(50);
console.log(score);
console.log(score.toFixed(5));
console.log(score.toString);
console.log(Math.round(965.369));
console.log(Math.abs(-965));// converts -ve to positive number
console.log(Math.max(3,8,4,5,1));


//
console.log(Math.random());//Math.random gives value [0,1]
const max=15;
const min=2;
console.log(Math.floor(Math.random()*(max-min +1)+min));// this formula gives number in [2,15]