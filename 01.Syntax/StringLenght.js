function StringLenght(wordOne , wordTwo , wordThree)
 {
let sum ;
sum = wordOne.length + wordTwo.length + wordThree.length;
let average = sum / 3;
average = Math.floor(average);
console.log(sum); 
console.log(average); 
}
StringLenght('chocolate', 'ice cream', 'cake');