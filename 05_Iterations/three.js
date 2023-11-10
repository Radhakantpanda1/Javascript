// array specific loops

// ** for of loop
// [""."","",....]
// [{},{},{},....]
/*
for (const iterator of object) {
    
}
*/
const array = [1,2,3,4,5,6,7,8,9,10];
for (const num of array) {
    console.log(num);
}
/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value
*/
const map =new Map();
map.set('IN','INDIA');
map.set('USA','United States Of America ');
map.set('Fr','France');
map.set('IN','INDIA');// stores uniquely 
console.log(map);
for (const key of map) {
  // console.log(key);
  /*
    output-
    [ 'IN', 'INDIA' ]
    [ 'USA', 'United States Of America ' ]
    [ 'Fr', 'France' ]
    */
}
for (const [key , value] of map) {
    // console.log(key , '--',value);
    /*
    IN -- INDIA
USA -- United States Of America 
Fr -- France
*/
}

let myObject ={
    userName:"Radhakant Panda",
    userAge:21,
    userId:"radhakant@ytb.com"
}
/*
for (const [key,value] of myObject) {
    console.log(key,'=', value);// not iterable using for of loop
}
*/