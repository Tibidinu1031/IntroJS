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

console.log("---------------------------")
console.log()

const randomNumbers = [375, 200, 3.14, 7, 13, 852];




const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];



const smallNumberss = randomNumbers.filter(sms => {
  return sms < 250;
})

const longFavoriteWords = favoriteWords.filter(fvds => {
  return fvds.length > 7;
})

console.log(smallNumberss);
console.log(longFavoriteWords);

console.log("---------------------------")
console.log()

const animalss = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animalss.findIndex(anml => {
  return anml === "elephant";
})

const startsWithS = animalss.findIndex(anml => {
  return anml[0] === "s";
})

console.log("---------------------------")
console.log()

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10)

console.log(newSum);

console.log("---------------------------")
console.log()

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));


const interestingWords = words.filter((word) => word.length > 5);
// Use filter to create a new array


console.log(interestingWords.every((word) => {return word.length > 5}));

console.log("---------------------------")
console.log()

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

cities.forEach(city => console.log('Have you visited ' + city + '?'));

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined

const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array

const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a single value


// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);


console.log("---------------------------")
console.log()

