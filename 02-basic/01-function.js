

function myname(){
    console.log("a")
    console.log("p")
    console.log("p")
    console.log("l")
    console.log("e")

}

// myname()


function addnumber(num1,num2){
    console.log(num1+num2)
}

// addnumber(3,4) 


// function looginmessage(username){
//     if(username===undefined){
//         console.log("please enter a user name")
//         return
//     }
//     return `${username} just logged in`

// }


// function looginmessage(username){
//     if(!undefined){
//         console.log("please enter a user name")
//         return
//     }
//     return `${username} just logged in`

// }

// console.log(looginmessage())


// function looginmessage(username = "aaa"){
//     if(!username){
//         console.log("please enter a user name")
//         return
//     }
//     return `${username} just logged in`

// }

// console.log(looginmessage())



function looginmessage(username = "aaa"){
    if(!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`

}

// console.log(looginmessage("bbb"))




function calculatecartprice(...num1){
    return num1

}

// console.log(calculatecartprice(200,400,500))


const user={
    username:"apple",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}


// handleobject(user)
// handleobject({
//     username:"mango",
//     price:300
// })

 const mynewarray=[200,400,100,600]


function returnsecondvalue(getarray){
    return getarray[1]

}

// console.log(returnsecondvalue(mynewarray))
// console.log(returnsecondvalue([200,400,100,600]))


// scope 

