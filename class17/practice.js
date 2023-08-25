var users=[13,14,2,1,4,"hello"]
// hello13
// hello1314
// hello13142
// for(i=0;i<users.length;i++){
//    if(users[i]%2==0)
// }   


function print(){
    return
}
var newUsers=[]
var b=users.forEach((element,ind)=>{
    newUsers.push(element*10)
})

console.log(newUsers,"users")

console.log(b,"b")


// [undefined,undefined,undefined]
// var a=users.map((element)=>{return element*10})

// console.log(a,"a")
// undefined , null , 0
// if(0){
//     console.log("nainji")
// }

var c=users.filter((element)=>{ return element%2})
console.log(c,"ccc")

var d=users.reduce((a,b)=>{ return a*b})
console.log(d)
