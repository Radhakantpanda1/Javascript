// const tinderUser=new Object() this is singleton
const tinderUser={}
tinderUser.name="radhakant"
tinderUser.age=21,
tinderUser.id="tind@tindi.in"
//console.log(tinderUser);   { name: 'radhakant', age: 21, id: 'tind@tindi.in' }
const regularUser={
    Username:{
        fullname:{
            firstname:"hitesh",
            lastname:"choudary"
        }
    },
    email:"hitesh@ytb.com"
}
console.log(regularUser)/*{
    Username: { fullname: { firstname: 'hitesh', lastname: 'choudary' } },
    email: 'hitesh@ytb.com'
  }*/

console.log(regularUser.Username);//{ fullname: { firstname: 'hitesh', lastname: 'choudary' } }
console.log(regularUser.Username.fullname);//{ firstname: 'hitesh', lastname: 'choudary' }
console.log(regularUser.Username.fullname.firstname);//hitesh


const obj1={a:1,b:2}
const obj2={c:3,d:4}
const obj3={obj1,obj2}
console.log(obj3)//{ obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } } obj inside obj just like string inside string
const obj4=Object.assign({},obj1,obj2)
console.log(obj4)// { a: 1, b: 2, c: 3, d: 4 }
const obj5={...obj1,...obj2}
console.log(obj5)//{ a: 1, b: 2, c: 3, d: 4 }  we will use it mostly just like spread

const User=[
    {
        id:1,
        email:"jdbgsbju.com"
    },
    {
        id:2,
        email:"nmnmdju.com"
    },
    {
        id:3,
        email:"lklkju.com"
    },
    {
        id:4,
        email:"jdbuig.com"
    }
]
console.log(User)/*[
    { id: 1, email: 'jdbgsbju.com' },
    { id: 2, email: 'nmnmdju.com' },
    { id: 3, email: 'lklkju.com' },
    { id: 4, email: 'jdbuig.com' }
  ]*/
  console.log(User[2])//{ id: 3, email: 'lklkju.com' }

 console.log(User[2].email)//lklkju.com

 console.log(tinderUser);/*{ name: 'radhakant', age: 21, id: 'tind@tindi.in' }*/ 
 console.log(Object.keys(tinderUser))//[ 'radhakant', 21, 'tind@tindi.in' ]
 console.log(Object.values(tinderUser))// [ 'radhakant', 21, 'tind@tindi.in' ]
 console.log(Object.entries(tinderUser))// [ [ 'name', 'radhakant' ], [ 'age', 21 ], [ 'id', 'tind@tindi.in' ] ]
 console.log(tinderUser.hasOwnProperty('age'))//true