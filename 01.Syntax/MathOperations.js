function mathOperations(numOne , numTwo , operator)
{
 let result;
switch(operator)
{
 case"+":
result = numOne + numTwo;
console.log(result);
 break;
 case"**":
 result = numOne ** numTwo;
 console.log(result);
  break;
  case"-":
  result = numOne - numTwo;
  console.log(result);
   break;
   case"*":
   result = numOne * numTwo;
   console.log(result);
    break;
    case"/":
    result = numOne / numTwo;
    console.log(result);
     break;
     case"%":
     result = numOne % numTwo;
     console.log(result);
      break;
      
} 
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');