const objectt = {
  random1: "plm",
  random2: "pe gard",
  sentence() {
    console.log(`${this.random1} ${this.random2}`)
  }
}

objectt.sentence();


const anotherObject = {
  _random1: "plm iar",
  _random2: "pe gard",
  get sentence() {
    return `${this._random1} ${this._random2}`
  },
  set sentence(word) {
    if (this._random1 === "plm iar") {
      this._random1 = word
    } else {
      return "N/A"
    }
  } 
}

anotherObject.sentence = "randooom"
console.log(anotherObject.sentence)