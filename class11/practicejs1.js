let num=prompt("Enter the number")
var num1 = 10;
var num2= 5;

switch(num) {
  case 1:
    sum();
    break;
  case 2:
    sub()
    break;
  case 3:
    mul();
    break;
    case 4:
    div()
    break;
    case 5:
    mod();
    break; 
    case 6:
     pow()
     break;
    
  default:
    text = "ERROR";
}

function sum(){
    var sum=num1+num2;
    console.log(sum);

}
function sub(){
    var sub=num1-num2;
    console.log(sub);

}
function mul(){
    var mul=num1*num2;
    console.log(mul);

}
function mod(){
    var mod=num1%num2;
    console.log(mod);
}
function div(){
    var div=num1/num2;
    console.log(div);
}
function pow(){
    var pow=num1**num2;
    console.log(pow);
}

sum();
sub();
mul();
div();
mod();
pow();