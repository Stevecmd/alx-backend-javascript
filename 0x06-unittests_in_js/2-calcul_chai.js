function calculateNumber (type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  let ans = 0;
  switch (type) {
    case 'SUM':
      ans = roundedA + roundedB;
      break;
    case 'SUBTRACT':
      ans = roundedA - roundedB;
      break;
    case 'DIVIDE':
      if (roundedB === 0) {
        ans = 'Error';
      } else {
        ans = roundedA / roundedB;
      }
      break;
  }
  return ans;
}

module.exports = calculateNumber;

// If the script is run directly from the command line
if (require.main === module) {
  const [, , type, a, b] = process.argv;
  const result = calculateNumber(type, parseFloat(a), parseFloat(b));
  console.log(result);
}
