
// let myDate= new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

let myDate= new Date("01-14-2023")

let myTimestamp = Date.now();

// console.log(myTimestamp);
// console.log(myDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newdate= new Date()

// console.log(newdate)
// console.log(newdate.getDay())
// console.log(newdate.getMonth())
// console.log(newdate.getFullYear())


console.log(newdate.toLocaleString())

let name =newdate.toLocaleString('default',{
    month:"long"
})

console.log(name)

console.log(myDate.toLocaleString('default',{
    day:"numeric",
    month:"long",
    year:"numeric"
}))

console.log(myDate.toLocaleString('default',{
    day:"2-digit",
    month:"long",
    year:"numeric"
}))
console.log(myDate.toLocaleString('default',{
    day:"2-digit",
    month:"long",
    year:"numeric",
    minute:"2-digit",
    hour:"2-digit"
}))