
  // object litrals 
const data={
    username:"james",
    age:24,
    getname:function(){
        console.log('hello world',this.username)
    }
}


console.log(data)
console.log(data.getname())
console.log(this)

//constructor are the blueprint 


function user(name,age){
    this.name=name
    this.age=age

    this.greet= function(){
        console.log('hello world i am ',this.name)
    }
}

const user1= new user('james',45)
const user2= new user('apple',33)

console.log(user1)
console.log(user1.greet())
console.log(user2)
console.log(user2.greet())

function shop(name,price){
    this.name=name
    this.price=price
}

const shop1= new shop("apple",50)

shop.prototype.increment= function(){
    this.price++
    
}

shop.prototype.print=function(){
    console.log('the name of the shop is ',this.name)

}

console.log(shop1.increment())
shop1.print()

console.log(shop1)