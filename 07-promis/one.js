// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("The Promise is Complete")
//     })

// })


// promiseOne.then(function(){
//     console.log("hellow world")
// })



// ``` new promise ```

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("The Promise is Complete")
        resolve()
    },1000)

})


promiseOne.then(function(){
    console.log("hellow world")
})


const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("third promise")
        resolve({username:"james",email:"james@gmail.com"})
    },1000)
})


promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve,reject){

    let error = false

    setTimeout(function(){
        if(!error){
            console.log('promise')
            resolve({username:"james",email:"james@gmail.com"})
        }
        else{
            reject("there is a Error")
        }

    },1000)
})
promiseFour
.then(function(user){
    console.log(user)
    console.log(user.username)
    return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log('either resolve or rejct is performed')

})




const promiseFive = new Promise(function(resolve,reject){

    let error = false

    setTimeout(function(){
        if(!error){
            console.log("promise")
            resolve({username:"apple",password:"mango"})
        }
        else{
            reject("there is a error ")
        }

    },1000)
});

async function consumepromisefive(){
    try{
        const response = await promiseFive
        console.log(response)
        console.log(response.username)

    }
    catch(error){
        console.log(error)



    }

}

consumepromisefive()



async function consumepfive(){
    try{
        const result = await promiseFive

        console.log('the ooutput of promise five is ',result)
    }
    catch(err){
        console.log(err)

    }

}

consumepfive()