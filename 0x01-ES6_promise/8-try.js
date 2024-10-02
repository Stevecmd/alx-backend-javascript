export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0'); // Throw an error for division by zero
  }
  return numerator / denominator; // Return the result of the division
}

