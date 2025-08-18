console.log("Advanced Objects Recap");
console.log("----------------------");

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  },
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}. `
  }
};

console.log(robot.provideInfo());

console.log("Advanced Objects Recap");
console.log("----------------------");

const robott = {
  energyLevel: 100,
  /* previously written before correcting the syntax
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  */
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
};

robott.checkEnergy();

console.log("Advanced Objects Recap");
console.log("----------------------");

const robottt = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robottt._energyLevel = "high";
robottt.recharge();

/*
The above code is writtent that way on purpose to demonstrate the use of getters and setters.
*/

console.log("Advanced Objects Recap");
console.log("----------------------");

const robotttt = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};

console.log(robotttt.energyLevel)

console.log("Advanced Objects Recap");
console.log("----------------------");

const rooboot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if (typeof num === 'number' && num >=0) {
      this._numOfSensors = num
    } else {
      console.log ('Pass in a number that is greater than or equal to 0')
    }
  }
};

rooboot.numOfSensors = 100;
console.log(rooboot.numOfSensors);

console.log("Advanced Objects Recap");
console.log("----------------------");

const robotFactory = (model, mobile) => {
  return {model: model,
  mobile: mobile,
  beep() {
    console.log("Beep Boop")
  }}
  }

const tinCan = robotFactory('P-500', true);

tinCan.beep();

console.log("Advanced Objects Recap");
console.log("----------------------");

const robotFactoryy = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactoryy('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

console.log("Advanced Objects Recap");
console.log("----------------------");

const robottttt = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robottttt;
functionality.fireLaser()

console.log("Advanced Objects Recap");
console.log("----------------------");

const robotttttt = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robotttttt);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robotttttt)

console.log(robotEntries);

// Declare newRobot below this line:
const newRobott = Object.assign({laserBlaster: true, voiceRecognition: true}, robotttttt)

console.log(newRobott);