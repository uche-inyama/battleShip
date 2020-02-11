const Board = require('./Board');
const ship = require('../ship/ship');
const placeShip = require('./positionShip');

it('checks if All the ships on the board has sank', () => {
  let battle0 = ship(4, 'ship0');
  let position0 = placeShip().positionShip(battle0.length, 'vertical', 9);

  const board = new Board([battle0], [position0]);
  for (let i = 0; i < battle0.length; i++) {
    battle0.hit(i);
  }
  expect(board.AllShipSank()).toBe(1);
});

it('checks if a ship recieves an attack', () => {
  let battle0 = ship(4, 'ship0');
  let position0 = placeShip().positionShip(battle0.length, 'vertical', 9);
  const board = new Board([battle0], [position0]);
  expect(board.receiveAttack(position0, 'ship0', 1)).toBe(true);
});

it('checks if a ship is positioned vertically', () => {
  let battle0 = ship(4, 'ship0');
  expect(placeShip().positionShip(battle0.length, 'vertical', 9)).toContain(
    9,
    19,
    29,
    39
  );
});

it('checks if a ship is positioned horizontally', () => {
  let battle0 = ship(4, 'ship0');
  expect(placeShip().positionShip(battle0.length, 'horizontal', 3)).toContain(
    3,
    4,
    5,
    6
  );
});
