const team = {
  _players: [
    { firstName: 'Jordan', lastName: 'Rackam', age: 24 },
    { firstName: 'Ricky', lastName: 'Something', age: 34 },
    { firstName: 'Ryan', lastName: 'Slow', age: 26 },
  ],
  _games: [
    { opponent: 'Rangers', teamPoints: 8, opponentPoints: 5 },
    { opponent: 'Titans', teamPoints: 7, opponentPoints: 10 },
    { opponent: 'Giants', teamPoints: 5, opponentPoints: 0 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    return (this._players = [
      ...this._players,
      {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      },
    ]);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    return (this._games = [
      ...this._games,
      {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      },
    ]);
  },
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);
