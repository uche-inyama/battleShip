import displayShip from './board/displayShip';

const Game = (() => {
  const computer = displayShip();
  const playerOne = displayShip('playerOne');
  return {
    computer,
    playerOne
  };
})();

export default Game;
