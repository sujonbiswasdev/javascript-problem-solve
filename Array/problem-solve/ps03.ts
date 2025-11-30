let arr1:number[] = [12, 35, 1, 10, 34, 1,4,50]

for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1.length;j++){
        if(arr1[i]<arr1[j]){
        //  store[store.length] = arr1[j],
         let tema=arr1[i] //40
         arr1[i]=arr1[j] // 40 = 90 =   10=90
         arr1[j]=tema; //90 =10
        //  console.log(arr1[i],arr1[j]);
        }
         
    }
}

const arr3:number[]=[]
for(let i=0;i<arr1.length;i++){
    let found = false;
    for(let j=0;j<arr3.length;j++){
        if(arr3[j]==arr1[i]){
            found=true
            break
        }
        
    }
    if(!found){
    arr3.push(arr1[i])
        }
}


function lergest (arr:any){
   for(let i=0;i<arr.length;i++){
     for(let j=0;j<i;j++){
        if(arr.length>0 && arr[i]!==arr1[j]){
        return arr[arr.length-2]
    }else{
        return -1
    }
     }
   }
   return -1
    
}
console.log(lergest(arr3));


