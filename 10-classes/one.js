
class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encriptpass(){
        return `${this.password}abc`
    }
}


const apple = new user('aaa','aa@gmail.com','123456')


console.log(apple.encriptpass())






// how to use call() in classes 
//here we will use __proto__ to link two classes

//we will use extend and super to ling a class


class item{
    constructor(name,price){
        this.name=name
        this.price=price

    }

    login(){
        return `${this.name} is the name `
    }
}



class shop extends item{
    constructor(locaton,name,price){
        super(name,price)
        this.locaton=locaton
        


    }

    printlocation(){
        return `this is the location ${this.locaton} and this is the name ${this.name}`
    }
}

const one= new shop('chennai','wood','2000')

console.log(one)
console.log(one.printlocation())
console.log(one.login())

const two = new item('tree','100')

console.log(two)
console.log(two.login())

console.log(one instanceof shop)