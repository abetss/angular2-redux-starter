import { NewFormula } from './new-formula';

describe('Service: NewFormula', () => {
  describe('increment', () => {

    it('should return a number given a number', () => {
      expect(NewFormula.increment(2)).toEqual(jasmine.any(Number));
    });

    it('should increase the given value by 5', () => {
      expect(NewFormula.increment(2)).toEqual(7);
    });
  });

  describe('decrement', () => {

    it('should return a number given a number', () => {
      expect(NewFormula.decrement(2)).toEqual(jasmine.any(Number));
    });

    it('should decrease the given value by 5', () => {
      expect(NewFormula.decrement(2)).toEqual(-3);
    });
  });
});
