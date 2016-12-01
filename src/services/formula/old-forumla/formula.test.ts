import { Formula } from './formula';

describe('Service: OldFormula', () => {
  describe('increment', () => {

    it('should return a number given a number', () => {
      expect(Formula.increment(2)).toEqual(jasmine.any(Number));
    });

    it('should increase the given value by 1', () => {
      expect(Formula.increment(2)).toEqual(3);
    });
  });

  describe('decrement', () => {

    it('should return a number given a number', () => {
      expect(Formula.decrement(2)).toEqual(jasmine.any(Number));
    });

    it('should decrease the given value by 1', () => {
      expect(Formula.decrement(2)).toEqual(1);
    });
  });
});
