// function doTask(tm){
//     setTimeout(()=>{
//         console.log("Task done")
//     },tm)
// }
// doTaskk(8000)

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(("data not sucess"))
        },100)
    })
}

async function doTask1(tm) {
    try {
        const res = await fetchData();

        console.log(res)

        
    } catch (error) {
        console.error('sorry',error)
    }
    
}
await doTask1(2000)