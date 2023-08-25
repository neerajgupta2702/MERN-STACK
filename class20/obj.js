var a={num1:"",num2:""}

function order(){
     a.num1= Number(document.getElementById("orderInput").value)
     a.num2= Number(document.getElementById("orderInput1").value)

     var sum = a.num1+a.num2
   //  document.getElementById("orderInput1").placeholder="try me"
     document.getElementById("result").innerHTML=sum

}


input={
 id:"orderInput",
 value:"",
 placeholder:"dad",
 style:"color:red"
}