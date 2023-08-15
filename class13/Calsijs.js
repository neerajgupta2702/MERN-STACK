var num1=23;
var num2=34;
var op="sub";
if(op=="+"||op=="sum")
{
    var sum =num1+num2;
    console.log("Sum is "+ sum );
    //console.log("sum is "+num1+num2);
}
else if(op=="-"||op=="sub"){
    console.log("Subtract is "+( num1-num2));

}
else if(op=="*"||op=="mul"){
    console.log("multiplication is "+(num1*Num2));
}
else if(op=="/"||op=="div"){
    console.log("Division is"+(num1/num2));

}
else if(op=="%"||op=="mod"){
    console.log("Reminder is"+(num1%num2));
}
else{
    console.log("No more Knowladge");
}