class Board {
  constructor(ships, shipPositions) {
    this.ships = ships;
    this.shipPositions = shipPositions;
    this.missedAttack = Array(100).fill(0);
  }

  AllShipSank() {
    const sunk = this.ships.reduce((a, ship) => {
      const fullyHit = ship.hitPositions.every(x => x === 1);
      a &= fullyHit;
      return a;
    }, true);
    return sunk;
  }

  receiveAttack(position, name, index) {
    const newValue = parseInt(position);
    for (const ship of this.ships) {
      if (ship.name === name) {
        ship.hit(index);
        return true;
      }
    }
    if (!this.shipPositions.includes(newValue)) {
      this.missedAttack.splice(newValue, 1, 1);
    }
    return false;
  }
}

// export { Board as default };
export default Board;
