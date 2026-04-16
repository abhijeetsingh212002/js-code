const score = 400

console.log(score)


const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber=23.8966


console.log(otherNumber.toPrecision(3))


console.log(Math.round(3.7))
console.log(Math.round(3.4))
console.log(Math.floor(3.9))
console.log(Math.ceil(3.4))
console.log(Math.trunc(3.4))
console.log(Math.floor(Math.random()*10) +1)


console.log(Math.max(12,22,1))
console.log(Math.min(12,22,1))

console.log(Math.pow(2,3))

console.log(Math.sqrt(16))

console.log(Math.abs(-10))

console.log(Math.cbrt(8))

console.log(Math.log(1))


let nums=[12,2,4,55,42]

let maxvalue= Math.max(...nums)

console.log(maxvalue)

//random in a range case

// console.log(Math.floor(Math.random() *(max-min +1))+min)
console.log(Math.floor(Math.random()*(6-1+1))+1)
