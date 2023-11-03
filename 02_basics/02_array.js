const marvel_heros=["Ironman","spiderman","thor" ];
const dc_heros=["superman","flash","batman","wonderwomen" ];
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);//array inside array 
// const all_heros=marvel_heros.concat(dc_heros);
// console.log(all_heros);// all heros in one array
//spread
// const all_new_heros=[...marvel_heros,...dc_heros];
//console.log(all_new_heros);// spread makes it easier
/*
const numarray=[1,2,3,[1,2,3,[,,2,3],4,,5],6];
const new_numarray=numarray.flat(Infinity); // all elements in one array nuarray.flat(depth);
console.log(new_numarray);
*/
/*
let score1=100;
let score2=200;
let score3=300;
let score4=400;
const myArray=Array.of(score1,score2,score3,score4);// to form an array
console.log(myArray);
*/

console.log(Array.isArray("radhakant"));// false
console.log(Array.from("radhakant"));// it is an array
console.log(Array.from({name: "radhakant"}));// returns an empty array []  bcoz you have to mention what you want to convert to an array the value or the key.(important )


