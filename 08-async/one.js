

// async function getallusers(){
//     try{

//         const response =await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         console.log(typeof(response))

//         const data = await response.json()

//         data.forEach(function(user){
//             console.log(user.username)
//         })

//         // console.log(data)
//         // console.log(data.username)


//     }
//     catch(err){
//         console.log("E: ", err)

//     }
    
// }

// getallusers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    console.log(typeof(response))
    return response.json()
})
.then((data)=>{

    data.forEach(function(user){
        console.log(user.username)
    })
    

})
.catch((err)=>{
    console.log(err)
})