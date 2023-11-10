const superHero=["spiderman","superman","ironman","thor"];
// using function
superHero.forEach(function (value){
    // console.log(value.length);// 9 8 7 4
})

// using arrow function
superHero.forEach((item) => {
    //console.log(item.length);// 9  8  7  4
})

superHero.forEach((item,index,array) => {
    console.log(item,index,array);
    /*
    spiderman 0 [ 'spiderman', 'superman', 'ironman', 'thor' ]
    superman 1 [ 'spiderman', 'superman', 'ironman', 'thor' ]
    ironman 2 [ 'spiderman', 'superman', 'ironman', 'thor' ]
    thor 3 [ 'spiderman', 'superman', 'ironman', 'thor' ]
*/

})


// object inside array

const userDetail=[
    {
        userName:"Radhakant Panda",
        userAge:21,
        userId:"radhakant@ytb"
    },
    {
        userName:"RajatKumar Dalai",
        userAge:19,
        userId:"rajatkumar@ytb"
    },
    {
        userName:"Rajakumar Bisi",
        userAge:20,
        userId:"rajabisi@ytb"
    }

]
userDetail.forEach((key)=>{
    console.log(key.userName);
    console.log(key.userAge);
    /*
Radhakant Panda
21
RajatKumar Dalai
19
Rajakumar Bisi
20
    */

})
