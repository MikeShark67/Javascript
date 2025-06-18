let num1 =  parseFloat ( process.argv[2]);
let operator = process.argv[3];
let num2= parseFloat ( process.argv[4]) ;
let output;


if(operator == "+"){
    output = num1 + num2;
}else if(operator == "-"){
    output = num1 - num2;
}else if(operator == "*"){
    output = num1 * num2;
}else if(operator == "/"){
    output = num1 / num2;}
else{console.log(`can do some`)}


console.log(` ${num1} ${operator} ${num2} = ${output}`);
