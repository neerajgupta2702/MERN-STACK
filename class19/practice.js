var users=[{name:"rahul",age:23,gender:"male"},
{name:"amit",age:1,gender:"male"},
{name:"preeti",age:10,gender:"female"},
{name:"suresh",age:30,gender:"male"},
{name:"suchita",age:30,gender:"female"},
{ name:"rohan",age:45,gender:"male"},
{ name:"mahwish",age:22,gender:"female"}]
 var child=[];
 var maleMember=[];
 var femaleMember=[];
users.forEach((element)=>{
    if(element.age<=10){
     child.push(element);
   }
   else if(element.age>10&&element.gender=="male"){
    maleMember.push(element);
   }
   else{
    femaleMember.push(element)
   }
})
console.log(child)
console.log(maleMember)
console.log(femaleMember)

