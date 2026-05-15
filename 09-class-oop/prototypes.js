

const array= ['hulk','spiderman']


const object1={
    name:"hulk",
    superhero:"spiderman",

    printsuperhero: function(){
        console.log('the super hero is ' ,this.superhero)
    }
}


console.log(array)
console.log(object1)
console.log(typeof(array))
console.log(typeof(object1))


Object.prototype.apple=function(){
    console.log('yes apple is present in its prototype');
    
}

Array.prototype.mango=function(){
    console.log('yes mango is present in its prototype');
    
}


object1.apple()
array.apple()


array.mango()
// object1.mango()






//inheriting  properties of other object by usnig __proto__



const object11 ={
    isloggedin:false
}


const object2 ={
    playing:false
}

const object3 ={
    available:true,
    __proto__:object11
}
console.log(object3)
console.log(object3.__proto__.isloggedin)
//here we are accesing the properties of object 1 in object 3 usng proto 



const object4 ={
    atwork:true,
    
}


//another method of doing is 

Object.setPrototypeOf(object4,object2)


console.log('object 4 ')
console.log(object4.__proto__.playing)
console.log('object2');

console.log(object2.__proto__.atwork)
//its undefine 

