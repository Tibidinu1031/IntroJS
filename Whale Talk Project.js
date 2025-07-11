const input = "This is Spartaae!";
// to check the code works fine kindly uncomment the line below
// const input = "turpentine and turtles";
// it should print: UUEEIEEAUUEE

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

/*
for (let i = 0; i < input.length; i++) {
  console.log(`${i}. ${input[i]}`)
}
*/

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i]) 
    }
  if (input[i] === 'u') {
    resultArray.push(input[i]) 
    }
  
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }
  }
}

console.log("CHECK:");
console.log(resultArray);
console.log(`String version w/ template literals: ${resultArray}`);
console.log();

const resultString = resultArray.join().toUpperCase();
console.log(`String version using .join().toUpperCase(): ${resultString}`);