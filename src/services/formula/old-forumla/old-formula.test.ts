import { OldFormula } from './old-formula';

describe('Service: OldFormula', () => {
  describe('increment', () => {

    it('should return a number given a number', () => {
      expect(OldFormula.increment(2)).toEqual(jasmine.any(Number));
    });

    it('should increase the given value by 1', () => {
      expect(OldFormula.increment(2)).toEqual(3);
    });
  });

  describe('decrement', () => {

    it('should return a number given a number', () => {
      expect(OldFormula.decrement(2)).toEqual(jasmine.any(Number));
    });

    it('should decrease the given value by 1', () => {
      expect(OldFormula.decrement(2)).toEqual(1);
    });
  });
});
