console.log("scope")

// block scope

// if(true){
//     let message = "this is block"
//     console.log(message)
// }

// for(let i =0;i<3;i++){
//     let loopMessage = "this is inside a for loop block "
//     console.log(loopMessage)
// }

// let count = 0 ;
// while(count<10){
//     console.log(count)
//     count++
// }
// funtion block or  local scope
// function add(a,b){
//     const sum = a+b
//     console.log(sum)
// }
// add(10,20)

// block scope
// const smart = true
// if(smart){
//      message = "sujon biswas"
//     console.log(message)
// }
// console.log(message)

// funtions scope

// function add(a,b){
//     const total = a+b
//     console.log(a,b)
//     console.log(total)
// }
// add(10,20)

// console.log(a,b)


//global scope

// let name = "Alex"
// function sayHello(){
//     console.log(name)
// }
// sayHello()

// lexical Scope
// function outerFunction(){
//     let outer = "this is outerFunction"
//     function innerFuntion(){
//         console.log(outer)
//     }
//     innerFuntion()
// }
                                                                                                    
// outerFunction()

// scope chine

// let name = "john"
// function first(){
//     let name = "Alex"
//     function secound(){
//         console.log(name)
//     }
//     secound()
// }
// first()


// let taxRate = 15;
// function tax(income){
//     const persent =taxRate%100
//     const result= (income/persent).toFixed(1)
//     console.log(result)
//     return result 
// }
// tax(50000)
