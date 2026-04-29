// // Immediately Invoked Function Expressions (IIFE)


// // function one(){
// //     console.log(`DB C onnected`)
// // }

// // one()

// //named iife
// (function one(){
//     console.log(`DB C onnected`)
// })();

// //unname iife
// (() =>  {
//     console.log(`db connected 2`)
// })();


// //parameter iife

// ((name) =>  {
//     console.log(`db connected 3 ${name}`)
// })('apple');





( function one(){
    console.log("hello")

})();


(()=>{
    console.log("world")

})();

((name)=>{
    console.log(name)
})("apple");