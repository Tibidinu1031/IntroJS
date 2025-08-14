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




