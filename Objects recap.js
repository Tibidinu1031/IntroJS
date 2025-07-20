console.log("Objects Recap")
console.log("-------------")
console.log()


const fasterShip = {
  color: 'silver',
  "Fuel Type": "Turbo Fuel"
};


console.log("-------------")
console.log()


let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};




let crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

// Write your code below

console.log("-------------")
console.log()

let spaceshipp = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';



const isActive = spaceshipp[propName];

console.log(spaceshipp[propName]);
// Write your code below

console.log("-------------")
console.log()

let sspaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

sspaceship.color = "glorious gold";

spaceship.numEngines = 8;

const toDelete = sspaceship['Secret Mission']

delete sspaceship['Secret Mission']

console.log(sspaceship)

// Write your code below

console.log("-------------")
console.log()

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';


const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log("Spim... Borp... Glix... Blastoff!")
  }
}

alienShip.retreat();
console.log('///////')
alienShip.takeOff();


// Write your code below

console.log("-------------")
console.log()

let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

const capFave = spaceship.crew.captain['favorite foods'][0];

spaceship.passengers = [ 
  {pass1: "A"},
  {pass3: "C"},
  {pass2: "B"},
];

const firstPassenger = spaceship.passengers[0];

console.log("-------------")
console.log()

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

const greenEnergy = (obj) => obj['Fuel Type'] = 'avocado oil';

const remotelyDisable = (obj) => obj.disabled = true;

console.log(greenEnergy(spaceship));
console.log(remotelyDisable(spaceship));
console.log(spaceship)

// Write your code below

console.log("-------------")
console.log()

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewRole in spaceship.crew) {
  console.log(`${crewRole}: ${spaceship.crew[crewRole].name}`)
};

for (let member in spaceship.crew) {
  console.log(`${spaceship.crew[member].name}: ${spaceship.crew[member].degree}`)
}

// Write your code below
