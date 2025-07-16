console.log("Objects")
console.log("-------")
console.log()


const fasterShip = {
  "Fuel Type" : 'Turbo Fuel',
  color: 'silver'
};
// Write your fasterShip object literal below

console.log("-------")
console.log()

let spaceshipp = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};


let crewCount = spaceshipp.numCrew;
let planetArray = spaceshipp.flightPath;
// Write your code below

console.log("-------")
console.log()

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';


let isActive = spaceship["Active Mission"];

console.log(spaceship[propName]);
// Write your code below

console.log("-------")
console.log()

let spaceshippp = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceshippp['color'] = "glorious gold";
spaceshippp.numEngines = 8;
delete spaceshippp["Secret Mission"];

// Write your code below

console.log("-------")
console.log()

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';


const alienShip = {
  retreat: function () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

alienShip.retreat();
alienShip.takeOff();
// Write your code below

console.log("-------")
console.log()

let sspaceship = {
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


const capFave = sspaceship.crew.captain['favorite foods'][0];

sspaceship.passengers = [{name1: 'Ana'}, {name2: 'Anna'}, {name3: "Hannah"}]

const firstPassenger = sspaceship.passengers[0].name1;
console.log(firstPassenger)

console.log("-------")
console.log()

let spaceships = {
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

for (let crewRole in spaceships.crew) {
  console.log(`${crewRole}: ${spaceships.crew[crewRole].name}`)
}
console.log('-------------------')
for (let crewRole in spaceships.crew) {
  console.log(`${spaceships.crew[crewRole].name}: ${spaceships.crew[crewRole].degree}`)
}

// Write your code below


