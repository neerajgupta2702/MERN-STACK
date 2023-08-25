var items=[{food:"pizza",id:"332"},{food:"burger",id:"778"}
,{food:"fries",id:"975"}
,{food:"samosa",id:"898"}
,{ food:"paitice",id:"234"}]
var order=898
// function orderd(ord){
//  let n=items.filter((element)=> { return element.id==ord})
//     return n[0].food
//     }
   
// console.log(orderd(order))


// var order="975-898"

// var o =order.split("-")
// console.log(o)

for(var i=0; i<items.length; i++){
    if (order==items[i].id){
        console.log(items[i].food)
        }
}


