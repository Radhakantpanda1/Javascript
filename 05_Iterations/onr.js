// for loop
/*
let index;
for ( index = 0; index <= 10; index++) {
    if(index%2==0){
        console.log(`${index} is even`)
    }
}
*/
// table printing
/*
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
       console.log(`${i}X${j}=${i*j}`)
    }
}
*/

// break and continue  --->  keywords
/*
for(let j=1;j<=10;j++){
    if(j==6){
        console.log(`6 detected`);
        break;
    }
    console.log(`the number is ${j}`)
}
*/
for(let j=1;j<=10;j++){
    if(j==6){
        console.log(`6 detected`);
        continue;
    }
    console.log(`the number is ${j}`)
}