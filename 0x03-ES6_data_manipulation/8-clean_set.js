function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || startString.length < 1) {
    return ''; // Return an empty string if startString is empty
  }

  const result = [];
  const setList = [...set];
  for (const value of setList) {
    if (value && value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // Append the rest of the string
    }
  }
  return result.join('-'); // Join the results with a hyphen
}

export default cleanSet;
