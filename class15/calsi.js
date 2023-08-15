var a=prompt("enter the number");
let b=prompt("enter 2nd number");
let n1=Number.parseInt(a);
let n2=Number.parseInt(b);
let opr=prompt("enter your calcution operator");

function calsi(num1,num2,opt) {
    if(opt=='+'){
    let ans= num1+num2;

        alert(`${num1}+${num2}=${ans}`);
    
    }
    else if(opt=='-')
    {
        alert(`${num1}-${num2}=${num1-num2}`);
    }
    else if(opt=='*'){

        alert(`${num1}*${num2}=${num1*num2}`);

    }
    else if(opt=='/'){
        
        alert(`${num1}/${num2}=${num1/num2}`);
    }
    else if(opt=='%'){

        alert(`${num1}%${num2}=${num1%num2}`);
    }
    else{
        alert("ERROR");
        alert("Refress and Enter Correct Symbol Or Number")
    }

    }

calsi(n1,n2,opr)