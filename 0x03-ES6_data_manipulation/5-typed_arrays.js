function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range'); // Throw error if position is out of bounds
  }

  const buffer = new ArrayBuffer(length); // Create a new ArrayBuffer
  const int8View = new Int8Array(buffer); // Create an Int8Array view of the buffer
  int8View[position] = value; // Set the value at the specified position

  return new DataView(buffer); // Return a DataView of the buffer
}

export default createInt8TypedArray;
