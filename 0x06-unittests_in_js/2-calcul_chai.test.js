const expect = require('chai').expect;
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when inputs are 0.1 and 0.3', () => {
      expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
    });

    it('should return -1 when inputs are -1.4 and -0.5', () => {
      expect(calculateNumber('SUM', -1.4, -0.5)).to.equal(-1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when inputs are 0.1 and 0.3', () => {
      expect(calculateNumber('SUBTRACT', 0.1, 0.3)).to.equal(0);
    });

    it('should return -1 when inputs are -1.4 and -0.5', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -0.5)).to.equal(-1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when inputs are -1.4 and -0.5', () => {
      expect(calculateNumber('DIVIDE', -1.4, -0.5)).to.equal('Error');
    });
  });
});
