const placeShip = () => {
  const positionShip = (length, orientation, position) => {
    let positionGrid = [];
    let cell = [];
    if (!positionGrid.includes(position) && orientation === 'horizontal') {
      if (length === 1) {
        positionGrid.push(position);
        cell.push(position);
        return cell;
      } else {
        for (let i = 0; i < length; i++) {
          positionGrid.push(position);
          cell.push(position);
          position += 1;
        }
      }
      return cell;
    } else if (!positionGrid.includes(position) && orientation === 'vertical') {
      if (length === 1) {
        positionGrid.push(position);
        cell.push(position);
        return cell;
      } else {
        for (let i = 0; i < length; i++) {
          positionGrid.push(position);
          cell.push(position);
          position += 10;
        }
      }
    }
    return cell;
  };

  return {
    positionShip
  };
};

module.exports = placeShip;
