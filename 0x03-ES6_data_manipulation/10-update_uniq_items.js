function updateUniqueItems(map) {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map entries
  for (const [key, value] of map) {
    // Update quantity if it is 1
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map; // Return the updated map
}

export default updateUniqueItems;
