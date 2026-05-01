
// truthy and falsey values


//falsey values

//   false,0,-0,0n,"",null,undefined,NaN



//truthy value

// "0","false"," ",[],{},function(){},


// empty array

const userarray=[]

if(userarray.length===0){
    console.log("empty array")
}


const emptyobject={}

if((Object.keys(emptyobject).length===0)){
    console.log("empty object")
}

if(!Object.keys(emptyobject).length){
    console.log("its an empty object")
}



// nullish coalescing operator : null undefined


let val1;

// val1=5??10
// val1=null ??10
val1=undefined ?? 15

console.log(val1)




//terniary operator

// condition ? true:false



const iceteaprice = 100


iceteaprice <=80 ? console.log("less than 80") : console.log("more than 80")

