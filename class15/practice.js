 var arr=[2,4,1,5,7]
 var i=1
 let j=1
 for(j=0;j<(arr.length);j++){
    for(i=0;i<(arr.length);i++){
    if(arr[i]>arr[j]){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
   }
    
 }
 console.log(arr)


 