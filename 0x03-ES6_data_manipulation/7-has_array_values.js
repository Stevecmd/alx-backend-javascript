function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value)); // Check if every val in array exists in set
}

export default hasValuesFromArray;
