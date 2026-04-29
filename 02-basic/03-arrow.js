

// const user={
//     username:"apple",
//     price:199,
//     welcomemessage:function(){
//         console.log(`${this.username} , Welcome to website`)
//         console.log(this)
//     }
// }


// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this)


// function one(){
//     console.log(this);

// }


// one();



//++++++++++++++ arrow function +++++


// const addtwo =(num1,num2)=>{
//     return num1 + num2
// }
// console.log(addtwo(3,4))



//implesit return  can we writen in same line


// const addtwo =(num1,num2)=>(num1 + num2)
const addtwo =(num1,num2)=>({username:"apple"})

console.log(addtwo(3,4))

const myarray=[2, 5, 3, , 7, 8 ]


myarray.forEach()