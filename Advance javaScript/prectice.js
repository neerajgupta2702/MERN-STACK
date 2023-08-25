// function add(a){     ///Normal function can alow dublicate 
//     return a+a;
// }



// //var addition=(a,a)=>{   it donot allows doublicate paramiters in function 
//     var addition=(a)=>{
//     return arguments[0]   //it take the values from call 
// }
// console.log(" first"+add(3));
// console.log(" Second"+ addition(3));
// // const res =JSON.stringify(result)  // it convert the object into String


function primeNo(){
    let sum=0;
   // let n= arguments.length();
     let n=10
    for(i=0;i<n;i++){
        if(arguments[i]%2==0){
        sum+=arguments[i]
        }
    }
    return sum;
}



let sum=primeNo(1,2,3,4,5,6,7,8,);
console.log(sum);