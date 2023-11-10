const numArray=[1,2,3,4,5,6,7,8,9,10];
// let container= numArray.map((item) => item+10);
// console.log(container);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/
let container= numArray.map((item) => item+10).map((item)=>item+1).filter((item) => item%2===0);// one after one is executed
console.log(container);
/*
output-
[ 12, 14, 16, 18, 20 ]
*/