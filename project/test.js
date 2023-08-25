let ar=[3,5,7,3,8]
let a=ar.sort((a,b)=>{
    return a-b;
  
})
var flag=0
var target=4;
for(let i=0;i<ar.length-1;i++)
{
    for(let j=i+1;j<ar.length;j++)
    { let sum=ar[i]+ar[j];
        if(sum==target)
        {
           console.log(i+"  "+j);
           flag=1;
        }
    }
}
if(flag==0)
console.log(-1)