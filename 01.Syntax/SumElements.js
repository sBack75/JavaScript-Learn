function sumElements(numberOne , numberTwo) 
{
let num1 = parseInt(numberOne);
let num2 = parseInt(numberTwo);

let sum = 0; ;
for(let i = num1 ; i <= num2 ; i++)
{
 let test = i;
 sum =test+ sum ;
}
console.log(sum);
}

sumElements('1', '5');