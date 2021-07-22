function solve(starNum)
{
 for (let index = 0; index <starNum; index++) 
 {
  var line ="";
     for (let secIndex = 0; secIndex < starNum; secIndex++)
     {
    line+='*';
      
     } 
     console.log(line);
 }
 
}

solve(2);