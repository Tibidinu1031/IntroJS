const team = {
  _players: [ 
    {firstName: "John", lastName: "Doe", age: 31},
    {firstName: "Michael", lastName: "Gray", age: 24},
    {firstName: "Tommy", lastName: "Shelby", age: 42}
  ],
  _games: [
    {opponent: "FCSB", teamPoints: 7, opponnentPoints: 0},
    {opponent: "CFR", teamPoints: 5, opponnentPoints: 0},
    {opponent: "Rapid", teamPoints: 3, opponnentPoints: 0}
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player)
  },
  addGame (newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game)
  }
}

console.log(team._players);
console.log(team._games);

team.addPlayer("Bugs", "Bunny", 76)
team.addGame('Titans', 100, 98)

console.log()

console.log(team._players);
console.log(team._games);

