function solve(name ,  kilograms,price) {
 let kiloTransform = kilograms / 1000;
 console.log(`I need $${(price*kiloTransform).toFixed(2)} to buy ${kiloTransform.toFixed(2)} kilograms ${name}.`);
 

}

solve('orange', 2500, 1.80);