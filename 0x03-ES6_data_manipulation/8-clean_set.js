function cleanSet(set, startString) {
  if (startString === '') {
    return ''; // Return an empty string if startString is empty
  }

  const result = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // Append the rest of the string
    }
  }
  return result.join('-'); // Join the results with a hyphen
}

export default cleanSet;
