function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 17,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 1,
            slamDunks: 1,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 19,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 7,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 15,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 15,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 5,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }

  const players = () => {
    const game = gameObject();
    return { ...game.home.players, ...game.away.players };
  }

  const numPointsScored = (player) => {
    return players()[player].points;
  }

  const shoeSize = (player) => {
    return players()[player].shoe;
  }

  const teamColors = (team) => {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === team) return game[team].colors;
    }
  }

  const teamNames = (game) => {
    return `Home team : ${game.home.teamName} vs Away team : ${game.away.teamName}`;
  }

  const playersNumbers = (team) => {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
    const jerseys = [];
    if (game.home.teamName === team) {
      for (const player in homePlayers) jerseys.push(homePlayers[player].number);
    } else {
      for (const player in awayPlayers) jerseys.push(awayPlayers[player].number);
    }
    return jerseys;
  }

  const playerStats = (player) => {
    return players()[player];
  }

  const bigShoeRebounds = () => {
    let largestShoeSize = 0;
    let playerWithLargestShoe;
    for (const player in players()) {
      if (largestShoeSize < players()[player].shoe) {
        largestShoeSize = players()[player].shoe;
        playerWithLargestShoe = player;
      }
    }
    return `Rebounds for player ${playerWithLargestShoe} that has big a shoe number are ${
      players()[playerWithLargestShoe].rebounds
    }`;
  }