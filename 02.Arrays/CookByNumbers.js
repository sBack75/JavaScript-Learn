function solve(number, ope1, ope2, ope3, ope4, ope5) {

 let numForOp = parseInt(number);
 let operand = [ope1, ope2, ope3, ope4, ope5];

 for (let i = 0; i < operand.length; i++) {
  switch (operand[i]) {
   case 'chop':
    numForOp = numForOp / 2;
    console.log(numForOp);
    break;
   case 'dice':
    numForOp = Math.sqrt(numForOp);
    console.log(numForOp);
    break;
   case 'spice':
    numForOp = numForOp + 1;
    console.log(numForOp);
    break;
   case 'bake':
    numForOp = numForOp * 3;
    console.log(numForOp);
    break;
   case 'fillet':
    numForOp = numForOp - (numForOp * 0.20);
    console.log(numForOp);
    break;
  }

 }

}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');