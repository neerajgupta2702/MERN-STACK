var arr=[2,3,5,6,4,9];
let i=0;
let k=arr.length-1;
for(i=0,j=k;i!=j&&i<j;i++,j--)
 //while(i!=j&&i<j)
{
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp;
   // i++;
   // j--;
    
 }
 console.log(arr);