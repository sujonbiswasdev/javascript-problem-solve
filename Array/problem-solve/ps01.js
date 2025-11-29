const arr =[10, 8, 30, 4, 5]
let x = 5

function findIndex(arr1,x){
    let i=0
    while(i<arr1.length){
        if(arr1[i]==x){
            return i
        }
        i++
    }
}
console.log(findIndex(arr,x));