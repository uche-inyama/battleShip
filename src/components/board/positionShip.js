const placeShip = () => {
  const positionShip = (length, orientation, position) => {
    const positionGrid = [];
    const cell = [];
    if (!positionGrid.includes(position) && orientation === 'horizontal') {
      if (length === 1) {
        positionGrid.push(position);
        cell.push(position);
        return cell;
      }
      for (let i = 0; i < length; i += 1) {
        positionGrid.push(position);
        cell.push(position);
        position += 1;
      }
      return cell;
    } else if (!positionGrid.includes(position) && orientation === 'vertical') {
      if (length === 1) {
        positionGrid.push(position);
        cell.push(position);
        return cell;
      }
      for (let i = 0; i < length; i += 1) {
        positionGrid.push(position);
        cell.push(position);
        position += 10;
      }
    }
    return cell;
  };

  return {
    positionShip
  };
};

export { placeShip as default };
