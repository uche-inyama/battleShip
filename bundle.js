/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/board/Board.js":
/*!***************************************!*\
  !*** ./src/components/board/Board.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Board {\n  constructor(ships, shipPositions) {\n    this.ships = ships;\n    this.shipPositions = shipPositions;\n    this.missedAttack = Array(100).fill(0);\n  }\n\n  AllShipSank() {\n    const sunk = this.ships.reduce((a, ship) => {\n      const fullyHit = ship.hitPositions.every(x => x === 1);\n      a &= fullyHit;\n      return a;\n    }, true);\n    return sunk;\n  }\n\n  receiveAttack(position, name, index) {\n    const newValue = parseInt(position);\n    for (const ship of this.ships) {\n      if (ship.name === name) {\n        ship.hit(index);\n        return true;\n      }\n    }\n    if (!this.shipPositions.includes(newValue)) {\n      this.missedAttack.splice(newValue, 1, 1);\n    }\n    return false;\n  }\n}\n\n// export { Board as default };\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n//# sourceURL=webpack:///./src/components/board/Board.js?");

/***/ }),

/***/ "./src/components/board/displayShip.js":
/*!*********************************************!*\
  !*** ./src/components/board/displayShip.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship/ship */ \"./src/components/ship/ship.js\");\n/* harmony import */ var _positionShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positionShip */ \"./src/components/board/positionShip.js\");\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board */ \"./src/components/board/Board.js\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gameState */ \"./src/gameState.js\");\n\n\n\n\n\nconst displayShip = (param = null) => {\n  const root = document.querySelector('.root');\n  const resetButton = document.createElement('button');\n  resetButton.innerText = 'Reset';\n  let name;\n  const randomNumArr = new Set();\n  const board = new _Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([], []);\n  resetButton.addEventListener('click', () => {\n    location.reload();\n  });\n\n  let header1;\n  let header2;\n  let header3;\n\n  const battle0 = Object(_ship_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4, 'ship0');\n  const battle1 = Object(_ship_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, 'ship1');\n  const battle2 = Object(_ship_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3, 'ship2');\n  const battle3 = Object(_ship_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 'ship3');\n  const battle4 = Object(_ship_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5, 'ship4');\n  const battle5 = Object(_ship_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3, 'ship5');\n  const battle6 = Object(_ship_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4, 'ship6');\n\n  board.ships = [battle0, battle1, battle2, battle3, battle4, battle5, battle6];\n\n  const position0 = Object(_positionShip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().positionShip(battle0.length, 'vertical', 9);\n  const position1 = Object(_positionShip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().positionShip(battle1.length, 'vertical', 2);\n  const position2 = Object(_positionShip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().positionShip(battle2.length, 'vertical', 10);\n  const position3 = Object(_positionShip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().positionShip(battle3.length, 'vertical', 7);\n  const position4 = Object(_positionShip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().positionShip(battle4.length, 'vertical', 5);\n  const position5 = Object(_positionShip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().positionShip(battle5.length, 'horizontal', 94);\n  const position6 = Object(_positionShip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().positionShip(battle6.length, 'horizontal', 71);\n\n  board.shipPositions = [\n    ...position0,\n    ...position1,\n    ...position2,\n    ...position3,\n    ...position4,\n    ...position5,\n    ...position6\n  ];\n\n  const shipArrOfArr = [\n    position0,\n    position1,\n    position2,\n    position3,\n    position4,\n    position5,\n    position6\n  ];\n\n  let len;\n\n  function getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min)) + min;\n  }\n\n  function passEvent() {\n    const grid2 = document.querySelector('.grid2');\n    while (true) {\n      const pickedNum = getRandomInt(0, 99);\n      const cell = grid2.querySelector(`.acell-${pickedNum}`);\n      if (randomNumArr.has(pickedNum) === false && cell.innerText !== 'X') {\n        randomNumArr.add(pickedNum);\n        cell.click();\n        break;\n      }\n    }\n  }\n\n  function callback1(e) {\n    e.preventDefault();\n    if (_gameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"].won()) {\n      return;\n    }\n\n    const { position, name, index } = e.target.dataset;\n\n    e.target.innerHTML = 'X';\n    if (board.receiveAttack(position, name, index)) {\n      e.target.style = 'background-color: red;';\n    }\n    if (board.AllShipSank()) {\n      _gameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setWinStatus();\n      header2.innerText = 'Human Player won';\n    }\n\n    passEvent();\n  }\n\n  function callback2(e) {\n    e.preventDefault();\n    if (_gameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"].won()) return;\n\n    const { position, name, index } = e.target.dataset;\n\n    e.target.innerHTML = 'X';\n\n    if (board.receiveAttack(position, name, index)) {\n      e.target.style = 'background-color: red;';\n    }\n    if (board.AllShipSank()) {\n      _gameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setWinStatus();\n      header2.innerText = 'Computer has won';\n    }\n  }\n\n  if (param === null) {\n    const rowDiv = document.createElement('div');\n    const headerWrapper = document.createElement('div');\n    headerWrapper.classList.add('headerWrapper');\n    header1 = document.createElement('h1');\n    header1.setAttribute('class', 'row-reverse');\n    header2 = document.createElement('h1');\n    header3 = document.createElement('h1');\n    header1.innerText = 'Computer Board';\n    header2.innerText = '';\n    header3.innerText = 'Player Board';\n    header2.classList.add('header2');\n    header1.appendChild(resetButton);\n    headerWrapper.append(header1, header2, header3);\n\n    rowDiv.setAttribute('class', 'grid1');\n    root.append(headerWrapper);\n\n    root.append(rowDiv);\n    for (let i = 0; i < 100; i += 1) {\n      const rowDiv = document.querySelector('.grid1');\n      const divlist = document.createElement('div');\n      divlist.classList.add('grid-item', `cell-${i}`);\n      divlist.setAttribute('data-id', i);\n      rowDiv.appendChild(divlist);\n    }\n\n    shipArrOfArr.forEach((arr, index) => {\n      len = arr.length;\n      name = `ship${index}`;\n      arr.forEach((ele, index1) => {\n        const cell = document.querySelector(`.cell-${ele}`);\n        cell.setAttribute('data-length', len);\n        cell.setAttribute('data-index', index1);\n        cell.style = 'background-color: white;';\n        cell.setAttribute('data-name', name);\n        cell.classList.add('coloredShip');\n      });\n    });\n\n    const grid1 = document.querySelector('.grid1');\n    const elems = grid1.querySelectorAll('.grid-item');\n    for (let i = 0; i < elems.length; i += 1) {\n      elems[i].addEventListener('click', callback1, { once: true });\n    }\n  } else {\n    const rowDiv = document.createElement('div');\n    rowDiv.setAttribute('class', 'grid2');\n    root.append(rowDiv);\n    for (let i = 0; i < 100; i += 1) {\n      const rowDiv = document.querySelector('.grid2');\n      const divlist = document.createElement('div');\n      divlist.classList.add('grid-item', `acell-${i}`, 'acell');\n      divlist.setAttribute('data-id', i);\n      rowDiv.appendChild(divlist);\n    }\n\n    shipArrOfArr.forEach((arr, index) => {\n      len = arr.length;\n      name = `ship${index}`;\n      arr.forEach((ele, index1) => {\n        const mainDiv = document.querySelector('.grid2');\n        const cell = mainDiv.querySelector(`.acell-${ele}`);\n        cell.setAttribute('data-length', len);\n        cell.setAttribute('data-index', index1);\n        cell.style = 'background-color: gray;';\n        cell.setAttribute('data-name', name);\n        cell.classList.add('coloredShip');\n      });\n    });\n\n    const grid2 = document.querySelector('.grid2');\n    const elems = grid2.querySelectorAll('.grid-item');\n\n    for (let i = 0; i < elems.length; i += 1) {\n      elems[i].addEventListener('click', callback2, { once: true });\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayShip);\n\n\n//# sourceURL=webpack:///./src/components/board/displayShip.js?");

/***/ }),

/***/ "./src/components/board/positionShip.js":
/*!**********************************************!*\
  !*** ./src/components/board/positionShip.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return placeShip; });\nconst placeShip = () => {\n  const positionShip = (length, orientation, position) => {\n    const positionGrid = [];\n    const cell = [];\n    if (!positionGrid.includes(position) && orientation === 'horizontal') {\n      if (length === 1) {\n        positionGrid.push(position);\n        cell.push(position);\n        return cell;\n      }\n      for (let i = 0; i < length; i += 1) {\n        positionGrid.push(position);\n        cell.push(position);\n        position += 1;\n      }\n      return cell;\n    }\n    if (!positionGrid.includes(position) && orientation === 'vertical') {\n      if (length === 1) {\n        positionGrid.push(position);\n        cell.push(position);\n        return cell;\n      }\n      for (let i = 0; i < length; i += 1) {\n        positionGrid.push(position);\n        cell.push(position);\n        position += 10;\n      }\n    }\n    return cell;\n  };\n\n  return {\n    positionShip\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/board/positionShip.js?");

/***/ }),

/***/ "./src/components/game.js":
/*!********************************!*\
  !*** ./src/components/game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board_displayShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board/displayShip */ \"./src/components/board/displayShip.js\");\n\n\nconst Game = (() => {\n  const computer = Object(_board_displayShip__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const playerOne = Object(_board_displayShip__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('playerOne');\n  return {\n    computer,\n    playerOne\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/components/game.js?");

/***/ }),

/***/ "./src/components/ship/ship.js":
/*!*************************************!*\
  !*** ./src/components/ship/ship.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ship; });\nconst Ship = (length, name) => {\n  const hitPositions = Array(length).fill(0);\n\n  const isSunk = () => hitPositions.every(currentValue => currentValue === 1);\n\n  const hit = index => {\n    hitPositions[index] = 1;\n    return hitPositions;\n  };\n\n  return {\n    length,\n    hitPositions,\n    isSunk,\n    hit,\n    name\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/ship/ship.js?");

/***/ }),

/***/ "./src/gameState.js":
/*!**************************!*\
  !*** ./src/gameState.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GameState = (() => {\n  let isWon = false;\n\n  const setWinStatus = () => {\n    isWon = true;\n  };\n\n  return {\n    won: () => isWon,\n    setWinStatus\n  };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameState);\n\n\n//# sourceURL=webpack:///./src/gameState.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reset_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_board_displayShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board/displayShip */ \"./src/components/board/displayShip.js\");\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game */ \"./src/components/game.js\");\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/reset.css?");

/***/ })

/******/ });