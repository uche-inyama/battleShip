const GameState = (() => {
  let isWon = false;

  const setWinStatus = () => {
    isWon = true;
  };

  return {
    won: () => isWon,
    setWinStatus
  };
})();
export default GameState;
