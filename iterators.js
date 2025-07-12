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
  console.log(typeof thing === 'number');
});

console.log(onlyNumbers);

console.log('----------------')
console.log()

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));

console.log('----------------')
console.log()

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
  return animal[0];
})


console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(bigNumber => {
  return bigNumber / 100;
})

console.log(smallNumbers)

console.log('----------------')
console.log()

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumberss = randomNumbers.filter(randomNumber => {
  return randomNumber < 250;
})

console.log(smallNumberss);


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length > 7;
})

console.log(longFavoriteWords);

console.log('----------------')
console.log()

const animalss = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalss.findIndex(animal => {
  return animal === 'elephant';
});

console.log(foundAnimal);

const startsWithS = animalss.findIndex(animal => {
  return animal[0] === 's';
});

console.log(startsWithS);

console.log('----------------')
console.log()

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

console.log('----------------')
console.log()

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

const interestingWords = words.filter(word => {
  return word.length > 5;
})


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => { 
  return word.length > 5;
} ));

console.log('----------------')
console.log()

