console.log("Advanced Objects")
console.log("----------------")
console.log()

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo())

console.log("----------------")
console.log()

const rob0t = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

rob0t.checkEnergy();

console.log("----------------")
console.log()

const roboot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`
    } else {
      return `System malfunction cannot retrieve energy level`
    }
  }
};

console.log(roboot.energyLevel);

console.log("----------------")
console.log()

const r0bot = {
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
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num
    } else {
      console.log(`Pass in a number that is greater than or equal to 0`)
    }
  }
};

roobot.numOfSensors = 100;
console.log(r0bot.numOfSensors)

console.log("----------------")
console.log()

const roobotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop")
    }
  }
}

const tinCan = roobotFactory('P-500', true)

tinCan.beep();