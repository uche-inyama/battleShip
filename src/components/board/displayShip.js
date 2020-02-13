import ship from '../ship/ship';
import placeShip from './positionShip';
import Board from './Board';
import GameState from '../../gameState';

const displayShip = (param = null) => {
  const root = document.querySelector('.root');
  const resetButton = document.createElement('button');
  resetButton.innerText = 'Reset';
  let position;
  let name;
  let index;
  const randomNumArr = new Set();
  const board = new Board([], []);
  resetButton.addEventListener('click', () => {
    location.reload();
  });

  let header1;
  let header2;
  let header3;

  const battle0 = ship(4, 'ship0');
  const battle1 = ship(2, 'ship1');
  const battle2 = ship(3, 'ship2');
  const battle3 = ship(1, 'ship3');
  const battle4 = ship(5, 'ship4');
  const battle5 = ship(3, 'ship5');
  const battle6 = ship(4, 'ship6');

  board.ships = [battle0, battle1, battle2, battle3, battle4, battle5, battle6];

  const position0 = placeShip().positionShip(battle0.length, 'vertical', 9);
  const position1 = placeShip().positionShip(battle1.length, 'vertical', 2);
  const position2 = placeShip().positionShip(battle2.length, 'vertical', 10);
  const position3 = placeShip().positionShip(battle3.length, 'vertical', 7);
  const position4 = placeShip().positionShip(battle4.length, 'vertical', 5);
  const position5 = placeShip().positionShip(battle5.length, 'horizontal', 94);
  const position6 = placeShip().positionShip(battle6.length, 'horizontal', 71);

  board.shipPositions = [
    ...position0,
    ...position1,
    ...position2,
    ...position3,
    ...position4,
    ...position5,
    ...position6
  ];

  const shipArrOfArr = [
    position0,
    position1,
    position2,
    position3,
    position4,
    position5,
    position6
  ];

  let len;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function passEvent() {
    const grid2 = document.querySelector('.grid2');
    while (true) {
      const pickedNum = getRandomInt(0, 99);
      const cell = grid2.querySelector(`.acell-${pickedNum}`);
      if (randomNumArr.has(pickedNum) === false && cell.innerText !== 'X') {
        randomNumArr.add(pickedNum);
        cell.click();
        break;
      }
    }
  }

  function callback1(e) {
    e.preventDefault();
    if (GameState.won()) {
      return;
    }

    const { position, name, index } = e.target.dataset;

    // position = e.target.dataset.id;
    // length = e.target.dataset.length;
    // name = e.target.dataset.name;
    // index = e.target.dataset.index;
    e.target.innerHTML = 'X';
    if (board.receiveAttack(position, name, index)) {
      e.target.style = 'background-color: red;';
    }
    if (board.AllShipSank()) {
      GameState.setWinStatus();
      header2.innerText = 'Human Player won';
    }

    passEvent();
  }

  function callback2(e) {
    e.preventDefault();
    if (GameState.won()) return;

    const { position, name, index } = e.target.dataset;
    // position = e.target.dataset.id;
    // length = e.target.dataset.length;
    // name = e.target.dataset.name;
    // index = e.target.dataset.index;

    e.target.innerHTML = 'X';

    if (board.receiveAttack(position, name, index)) {
      e.target.style = 'background-color: red;';
    }
    if (board.AllShipSank()) {
      GameState.setWinStatus();
      header2.innerText = 'Computer has won';
    }
  }

  if (param === null) {
    const rowDiv = document.createElement('div');
    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('headerWrapper');
    header1 = document.createElement('h1');
    header1.setAttribute('class', 'row-reverse');
    header2 = document.createElement('h1');
    header3 = document.createElement('h1');
    header1.innerText = 'Computer Board';
    header2.innerText = '';
    header3.innerText = 'Player Board';
    header2.classList.add('header2');
    header1.appendChild(resetButton);
    headerWrapper.append(header1, header2, header3);

    rowDiv.setAttribute('class', 'grid1');
    root.append(headerWrapper);

    root.append(rowDiv);
    for (let i = 0; i < 100; i += 1) {
      const rowDiv = document.querySelector('.grid1');
      const divlist = document.createElement('div');
      divlist.classList.add('grid-item', `cell-${i}`);
      divlist.setAttribute('data-id', i);
      rowDiv.appendChild(divlist);
    }

    shipArrOfArr.forEach((arr, index) => {
      len = arr.length;
      name = `ship${index}`;
      arr.forEach((ele, index1) => {
        const cell = document.querySelector(`.cell-${ele}`);
        cell.setAttribute('data-length', len);
        cell.setAttribute('data-index', index1);
        cell.style = 'background-color: white;';
        cell.setAttribute('data-name', name);
        cell.classList.add('coloredShip');
      });
    });

    const grid1 = document.querySelector('.grid1');
    const elems = grid1.querySelectorAll('.grid-item');
    for (let i = 0; i < elems.length; i += 1) {
      // (function() {
      elems[i].addEventListener('click', callback1, { once: true });
      // })(i);
    }
  } else {
    const rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'grid2');
    root.append(rowDiv);
    for (let i = 0; i < 100; i += 1) {
      const rowDiv = document.querySelector('.grid2');
      const divlist = document.createElement('div');
      divlist.classList.add('grid-item', `acell-${i}`, 'acell');
      divlist.setAttribute('data-id', i);
      rowDiv.appendChild(divlist);
    }

    shipArrOfArr.forEach((arr, index) => {
      len = arr.length;
      name = `ship${index}`;
      arr.forEach((ele, index1) => {
        const mainDiv = document.querySelector('.grid2');
        const cell = mainDiv.querySelector(`.acell-${ele}`);
        cell.setAttribute('data-length', len);
        cell.setAttribute('data-index', index1);
        cell.style = 'background-color: gray;';
        cell.setAttribute('data-name', name);
        cell.classList.add('coloredShip');
      });
    });

    const grid2 = document.querySelector('.grid2');
    const elems = grid2.querySelectorAll('.grid-item');

    for (let i = 0; i < elems.length; i += 1) {
      // (function() {
      elems[i].addEventListener('click', callback2, { once: true });
      // })(i);
    }
  }
};
export default displayShip;
