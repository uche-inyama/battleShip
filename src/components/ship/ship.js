const Ship = (length, name) => {
  let hitPositions = Array(length).fill(0);

  const isSunk = () => hitPositions.every(currentValue => currentValue === 1);

  const hit = index => {
    hitPositions[index] = 1;
    return hitPositions;
  };

  return {
    length,
    hitPositions,
    isSunk,
    hit,
    name
  };
};

export { Ship as default };
