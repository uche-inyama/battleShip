import Board from './board/Board';
import displayShip from './board/displayShip';

const Game = (() => {
  const computer = displayShip();
  const playerOne = displayShip('playerOne');
})();

export default Game;
