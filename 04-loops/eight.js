
// reduce

const mynum=[1,2,3]

// const mytotal= mynum.reduce((acc,cur)=>acc+cur,0)

// const mytotal=mynum.reduce(function(acc,cur){
//     console.log(` acc: ${acc} and currval: ${cur}`)
//     return acc+cur
// },0)

// console.log(mytotal)


const shoppingcart=[
    {
        itemname:"js",
        price:100

    },
    {
        itemname:"jss",
        price:200
    },
    {
        itemname:"jsss",
        price:300
    },
    {
        itemname:"jssss",
        price:400
    }


]


const totalprice= shoppingcart.reduce((acc,item)=>acc+item.price,0)

console.log(totalprice)