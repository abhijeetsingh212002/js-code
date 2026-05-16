//static prop



class User{
    constructor(username){
        this.username = username
    }

    static createId(){
        return `123`
    }
}

const user1 = new User("abhi")
console.log(user1.createId())

console.log(User.createId())