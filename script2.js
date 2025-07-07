console.log("Variables Today")
console.log("---------------")
console.log()

var favoriteFood = "pizza"

var numOfSlices = 8

console.log(favoriteFood)
console.log(numOfSlices)

console.log("---------------")
console.log()

let changeMe = true;

changeMe = false

console.log(changeMe)

console.log("---------------")
console.log()

// TypeError on purpose to check if I can reassign a const
/*const entree = "Enchiladas";

console.log(entree);

entree = "Tacos"
*/

console.log("---------------")
console.log()

let levelUp = 10;
levelUp += 5;

let powerLevel = 9001;
powerLevel -= 100;

let multiplyMe = 32;
multiplyMe *= 11;

let quarterMe = 1152;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

console.log("---------------")
console.log()

let gainedDollar = 3;
gainedDollar ++;

let lostDollar = 50;
lostDollar --;

console.log("Test gainedDollar = " + gainedDollar + "; " + "Test lostDollar = " + lostDollar)

console.log(`Test gainedDollar = ${gainedDollar}; Test lostDollar = ${lostDollar} ||`)

console.log("---------------")
console.log()

let favoriteAnimal = "Tiger";

console.log("My favorite animal: " + favoriteAnimal);

console.log("---------------")
console.log()

var myName = "Tiberius Dinu";

const myCity = "San Francisco";

console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

console.log("---------------")
console.log("Weather Project")
console.log()

// The Kelvin temperature value stay constant
const kelvin = 0;

// The Celsius temeperature value is 273 degrees lowe that Kelvin
let celsius = kelvin - 273;
//console.log(celsius)

//Fahrenheit value follows this formula: Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;

//The Math.floor() method rounds the fahrenheit value if there any any decimals
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log()
//Newton = Celsius * (33/100)
let newton = celsius * (33/100);
newtonRounded = Math.floor(newton);
console.log(`The exact temperature in Newton degrees is ${newton} and the rounded one is ${newtonRounded}.`)

console.log("---------------")
console.log("Dog Years Project")
console.log()

//Tiberius Dinu's (me) age below:
const myAge = 30;

//Using let because this variable will chage.
let earlyYears = 2;

earlyYears *= 10.5;
console.log(earlyYears);

//subtracting the first 2 years since we already have a result from them stored into earlyYears + we'll use a different multiplier from now on.
let laterYears = myAge - 2;

//kindly see the previous comment
laterYears *= 4;
console.log(laterYears);

//adding the values now to see my age in doggo years
myAgeInDogYears = earlyYears + laterYears;

//Writing my name and displaying it in lowercases hau hau
const myNameLowercased = "Tiberius Dinu".toLowerCase();

//Writing one normally too tho
const myName = "Tiberius Dinu";

console.log()

//Using string interpolations now
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


