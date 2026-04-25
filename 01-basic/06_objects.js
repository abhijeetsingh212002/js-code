// console.log("objects")

// singleton
// Object.create


// literals and constructors


// object literals

const jsuser={
    name:"apple",
    age:22,
    location:"india",
    email:"abc@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","tuesday"]


}

// console.log(jsuser.email)
// console.log(jsuser["email"])

// jsuser.email="aaa@gmail.com"

// console.log(jsuser["email"])

// jsuser.greeting=function(){
//     console.log("hello and welcome")

// }

// console.log(jsuser.greeting)
// console.log(jsuser.greeting())


// jsuser.greeting2=function(){
//     console.log(`hello and welcome ${jsuser.name}`)
// }
// console.log(jsuser.greeting2())






// singletone


const users= new Object();

users.id="123abc"
users.name="apple"
users.isloggedin=false

// console.log(users)

// const regularuser ={
//     email:"aaaa@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"apple",
//             middlename:"app",
//             lastname:"le"

//         }
//     }
// }

const target ={a:1,b:2}
const source={b:4,c:5}

// const result= Object.assign(target,source)
// const result= Object.assign({},target,source)

// const result={...target,...source}
// console.log(result)


console.log(Object.keys(target))
console.log(Object.values(target))


console.log(Object.entries(target))

