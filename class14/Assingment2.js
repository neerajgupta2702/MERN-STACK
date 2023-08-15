//*********** */Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
// var num=30;
// var sum=0;
// var num;
// for(i=10;i<num;i++){
//     if(i%2!=0){
   
//    sum=sum+i;
//     }
// }
// console.log(sum);


//********** */Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10 like 1*1=1,1*2=2
var i
let num=10;
var j;
string="";
for(i=1;i<=num;i++){
    var num2=15
    if(num<=15){ 
    var str;
    for(j=1;j<=num2;j++){
     str=(j+"*"+i+"="+(j*i));
      string+=str;           
    if((j*i)<10&&(j*i)>0){
        string+="   "   //6 space
    }
    else if((j*i)<100&&(j*i)>=10){
        string+="  "   //5 space
    }
    else if((j*i)<1000&&(j*i)>=100){
        string+=" "//4 space
    }
    else{
        string+=" "
    }
     }

      
    }
   
    string+="\n";
}
console.log(string);


//*****print Square star pattern******/
// var num=4;
// var i
// let string=""
// for(i=0;i<num;i++){
//     var j
//     for(j=0;j<num;j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);
//**********Find the factorial of a number If number is 5 Then output will be 5*4*3*2*1=120 */
// let n=4;
// var fec=1;4
// while(n!=0){
//     fec=fec*n;
//    n--;
// }
// console.log(fec);

