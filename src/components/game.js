import Board from './board/Board';
import displayShip from './board/displayShip';

const Game = (() => {
  const computer = displayShip(null);
  const playerOne = displayShip('playerOne');
})();

export default Game;
