function circleArea(value)
 {
  let typeOf = typeof(value);
 if(typeOf === 'number')
 {
  let result ;
  result = Math.PI* (value**2);
  result = result.toFixed(2);
  console.log(result);
 }
 else if(value !== 'number')
 {
  console.log(`We can not calculate the circle area, because we receive a ${typeOf}.`)
 }
 
}

circleArea(5);
circleArea('name');