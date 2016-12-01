import { Formula } from './index';

describe('Service Interface: Formula', () => {
  describe('increment', () => {

    it('should return a number given a number', () => {
      expect(Formula.increment(2)).toEqual(jasmine.any(Number));
    });

    it('should increase the given value', () => {
      expect(Formula.increment(2) > 2).toBeTruthy();
    });
  });

  describe('decrement', () => {

    it('should return a number given a number', () => {
      expect(Formula.decrement(2)).toEqual(jasmine.any(Number));
    });

    it('should decrease the given value', () => {
      expect(Formula.decrement(2) < 2).toBeTruthy();
    });
  });
});
