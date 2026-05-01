const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}

// for (const key in myobject) {
//     console.log(key)
    
// }


// for (const key in myobject) {
//     console.log(myobject[key])
    
// }

for (const key in myobject) {
    console.log(`keys are ${key} and values are ${myobject[key]}`)
    
}