console.log("Higher-Order Functions and Iterators Recap")
console.log("---------------------------")
console.log()

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};


const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();

console.log(isTwoPlusTwo.name)
// Write your code below

console.log("---------------------------")
console.log()

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  return (checkA === checkB) ? `Plm ${func(val)}` : 'inconsistent results';
}

console.log(checkConsistentOutput(addTwo, 1031));

console.log("---------------------------")
console.log()

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

console.log("---------------------------")
console.log()

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`))


/* same function:
fruits.forEach(function(fruit) {
  console.log(`I'd like to eat an {fruit}`)
})
*/

console.log("---------------------------")
console.log()

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
  return animal[0];
})

// Create the secretMessage array below


console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];


const smallNumbers = bigNumbers.map(num => {
  return num / 100;
})
// Create the smallNumbers array below

