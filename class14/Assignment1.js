var num=100;
var i=1;
while(i<=num){
    if(i%3==0&&i%5==0)
    {
        console.log(i+" FizzBuzz")
    }
    if(i%3==0){
      console.log(i+" Fizz");
    }
    else if(i%5==0){
        console.log(i+" Buzz");
    }
    else{

    }
    i++;
}

// var code="ERROR";
// if(code=="ERROR"){
//     console.log("Send your code in group to Ask");
// }
// else{
//     console.log("Do not sent code in group !Please");
// }