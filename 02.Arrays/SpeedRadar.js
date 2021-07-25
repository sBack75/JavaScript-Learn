function speedRadar(speed , type) {

 let overLimit = 0;
 let limitType ;

switch (type) {
 case 'motorway':
  overLimit = speed - 130;

  if (overLimit <=20) {
   limitType = 'speeding'
  }
  else if(overLimit >20 && overLimit <=40)
  {
    limitType = 'excessive speeding'
  }
  else
  {
    limitType = 'reckless driving';
  }

  if (speed > 130) {
   console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - ${limitType}`)
  }
  else{
   console.log(`Driving ${speed} km/h in a 130 zone`)
  }
  break;

  case 'interstate':
  overLimit = speed - 90;

  if (overLimit <=20) {
    limitType = 'speeding'
   }
   else if(overLimit >20 && overLimit <=40)
   {
     limitType = 'excessive speeding'
   }
   else
   {
     limitType = 'reckless driving';
   }
  if (speed > 90) {
   console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - ${limitType}`)
  }
  else{
   console.log(`Driving ${speed} km/h in a 90 zone`)
  }
   break;

   case 'city':
    overLimit = speed - 50;

    if (overLimit <=20) {
      limitType = 'speeding'
     }
     else if(overLimit >20 && overLimit <=40)
     {
       limitType = 'excessive speeding'
     }
     else
     {
       limitType = 'reckless driving';
     }
    if (speed > 50) {
     console.log(`The speed is ${speed- 50} km/h faster than the allowed speed of 50 - ${limitType}`)
    }
    else{
     console.log(`Driving ${speed} km/h in a 50 zone`)
    }
  break;

  case 'residential':
   overLimit = speed - 20;

   if (overLimit <=20) {
    limitType = 'speeding'
   }
   else if(overLimit >20 && overLimit <=40)
   {
     limitType = 'excessive speeding'
   }
   else
   {
     limitType = 'reckless driving';
   }
   if (speed > 20) {
    console.log(`The speed is ${speed-20} km/h faster than the allowed speed of 20 - ${limitType}`)
   }
   else{
    console.log(`Driving ${speed} km/h in a 20 zone`)
   }
  break;

 
}

}

speedRadar(40, 'city');
speedRadar(21, 'residential');
speedRadar(120, 'interstate');
