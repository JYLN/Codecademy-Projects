const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(i);
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let v = 0; v < vowels.length; v++) {
    // console.log(v);
    if (input[i] === vowels[v]) {
      resultArray.push(input[i]);
    }
  }
}

//console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
