var a={num1:"",num2:""}

// function sum(){
//     a.num1= Number(document.getElementById("input1").value)
//      a.num2= Number(document.getElementById("input2").value)

//      var ans = a.num1+a.num2
//      document.getElementById("result").innerHTML=ans
// }
// function sub(){
//     a.num1= Number(document.getElementById("input1").value)
//      a.num2= Number(document.getElementById("input2").value)
    
//      var ans= a.num1-a.num2
//      document.getElementById("result").innerHTML=ans
// }
// function mul(){
//     a.num1= Number(document.getElementById("input1").value)
//      a.num2= Number(document.getElementById("input2").value)
    
//      var ans = a.num1*a.num2
//      document.getElementById("result").innerHTML=ans
// }
// function div(){
//     a.num1= Number(document.getElementById("input1").value)
//      a.num2= Number(document.getElementById("input2").value)
    
//      var ans= a.num1/a.num2
//      document.getElementById("result").innerHTML=ans
// }
// function perc(){
//     a.num1= Number(document.getElementById("input1").value)
//      a.num2= Number(document.getElementById("input2").value)
    
//      var ans= a.num1*(a.num2/100)
//      document.getElementById("result").innerHTML=ans
// }
// function rem(){
//     a.num1= Number(document.getElementById("input1").value)
//      a.num2= Number(document.getElementById("input2").value)
    
//      var ans= a.num1%a.num2;
//      document.getElementById("result").innerHTML=ans
// }

function operature(opt){
    a.num1= Number(document.getElementById("input1").value)
     a.num2= Number(document.getElementById("input2").value)
if(opt=='+'){
     let ans = a.num1+a.num2
     document.getElementById("result").innerHTML=ans
}
else if(opt=='-'){
    let ans = a.num1-a.num2
    document.getElementById("result").innerHTML=ans
}
else if(opt=='*')
{
    let ans = a.num1*a.num2
    document.getElementById("result").innerHTML=ans
}
else if(opt=='/'){
    let ans = a.num1/a.num2
    document.getElementById("result").innerHTML=ans
}
else{
     
}
}