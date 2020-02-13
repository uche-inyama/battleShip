import Ship from './ship';

it('checks if ship, is sinking', () => {
  expect(Ship(2).isSunk()).toBe(false);
});

it('checks if hitposition contains 1', () => {
  expect(Ship(2).hit(0)).toContain(1);
});
