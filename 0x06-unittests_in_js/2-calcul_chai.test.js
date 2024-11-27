/* global describe it */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are 0.1 and 0.3', () => {
      expect(calculateNumber('SUM', 0.1, 0.3), 0);
    });

    it('should return -1 when inputs are -1.4 and -0.5', () => {
      expect(calculateNumber('SUM', -1.4, -0.5), -1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when inputs are 0.1 and 0.3', () => {
      expect(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
    });

    it('should return -1 when inputs are -1.4 and -0.5', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -0.5), -1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return Error when inputs are -1.4 and -0.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, -0.5), 'Error');
    });
  });
});
