function solve(number) {
 let word = number + "";
 let sum = 0;
 let check = true;
 for (let i = 0; i < word.length; i++) {
  let curNum = parseInt(word[i]);
  sum = curNum + sum;
  if (i < word.length - 1) {
   if (curNum != parseInt(word[i + 1])) {
    check = false;
   }
  }
 }
console.log(check);
console.log(sum);
}

solve(1234)