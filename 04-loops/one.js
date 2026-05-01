//for


// for(let i=0;i<10;i++){
//     console.log(i)


// }

// for(let i=0;i<=10;i++){
//     console.log(`outer loop value : ${i}`)
//     for(let j=0;j<=10;j++){
//         console.log(`inner loop value ${j} and inner loop value ${i}`)

//     }

// }


// for(let i=1;i<=10;i++){
//     if(i===5){
//         console.log("detected value 5")
//         break
//     }

//     console.log(`loop vlaue : ${i}`)
// }

for(let i=1;i<=10;i++){
    if(i===5){
        console.log("detected value 5")
        continue
    }

    console.log(`loop vlaue : ${i}`)
}