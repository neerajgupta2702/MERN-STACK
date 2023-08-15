var num1=2;
var num2=3;

var op="*";


if (op=="+") {
  var sum=num1+num2;
  console.log(sum);    
} 
  else if(op=="-") {
    var sub=num1-num2;
    console.log(sub);
    
}
else if(op=="*"){
    var mul=num1*num2;
    console.log(mul);
}
else if(op=="/"){
    var div=num1/num2;
    console.log(div);
}
else if(op=="%"){
    var rim=num1%num2;
    console.log(rim);
}
else{
    console.log("ERROR");
}
