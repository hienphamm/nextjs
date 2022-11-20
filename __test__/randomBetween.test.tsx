import { randomBetween } from 'utils/randomBetween';

const randomSpy = jest.spyOn(Math, 'random');

describe('random between', () => {
  describe('when Math.random() return 0', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0.5);
    });
    it('called with min=3 and max=5 returns 3', () => {
      expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(3);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });

    it('called with min=3 and max=5 returns 1', () => {
      expect(randomBetween(1, 5)).toBeGreaterThanOrEqual(1);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });
});
