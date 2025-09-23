console.log("promise")

// const order = new Promise((resolve,reject)=>{
//   const foodReady = true
//   if(foodReady){
//     resolve("Food is ready!");
//   }else{
//     reject("food is not ready")
//   }
// })

// order.then((res)=>console.log(res)).catch((error)=>{
//     console.log(error)
// }).finally(()=>console.log('this is finaly'))

// const getUsers = new Promise((resove,reject)=>{
//     const userAvailable = true;
//     const users = ['sujon','rajon','ridoy','madob']
//     if(userAvailable){
//         resove(users)
//     }else{
//         reject("no user data available")
//     }
// })
// getUsers.then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("this is finally block")
// })

const moneyRequsest = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Request submited"),1000)
})
const transferMoney = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('money transfers'),2000)
})
const payFree = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("free paid"))
})

Promise.all([moneyRequsest,transferMoney,payFree]).then((res)=>console.log(res)).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log(["promise all"])
})