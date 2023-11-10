const myObject={
    userName:"Radhakant Panda",
    userAge:21,
    userId:"radhakant@google.com"
}
for (const value in myObject) {
    // console.log(key);
    /*
    userName
userAge
userId
*/
}
for (const key in myObject) {
  // console.log(`${key} =${myObject[key]}`)
   /*
   userName =Radhakant Panda
userAge =21
userId =radhakant@google.com
*/
}

const superHero=["spiderman","superman","ironman","thor"];
for (const key in superHero) {

   // console.log(key);// 0 1 2 3   these are the bydefault keys of an arrray
  // console.log(superHero[key]);
   /*
   spiderman
superman
ironman
thor
*/
}