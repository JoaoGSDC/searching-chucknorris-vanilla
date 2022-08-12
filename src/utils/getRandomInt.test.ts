import { getRandomInt } from './getRandomInt';

describe('getRandomInt', () => {
  it('should return a random number', () => {
    expect(getRandomInt(1, 1)).toBe(1);
  });

  it('should return a number between 1 and 10', () => {
    const value = getRandomInt(1, 10);

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThan(10);
  });
});
