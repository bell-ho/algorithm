function solution(players, callings) {

  const idxs = {};

  for (let i = 0; i < players.length; i++) {
    idxs[players[i]] = i;
  }
  callings.forEach((player) => {

    const curIdx = idxs[player];
    const nextplayer = players[curIdx - 1];

    players[curIdx - 1] = player;
    players[curIdx] = nextplayer;

    idxs[player]--;
    idxs[players[curIdx]]++;
  });

  return players;
}