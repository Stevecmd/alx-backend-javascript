const Utils = {
  calculateNumber: function calculateNumber (type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    if (type === 'SUM') {
      return roundedA + roundedB;
    } else if (type === 'SUBTRACT') {
      return roundedA - roundedB;
    } else if (type === 'DIVIDE') {
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    } else {
      throw new Error('Invalid type');
    }
  }
};

module.exports = Utils;

// If the script is run directly from the command line
if (require.main === module) {
  const [,, type, a, b] = process.argv;
  const result = Utils.calculateNumber(type, parseFloat(a), parseFloat(b));
  console.log(result);
}
