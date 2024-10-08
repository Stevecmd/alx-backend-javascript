// Create and export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0); // Initialize the count to 0
  }

  // Increment the count for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Throw an error if the count is >= 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export default queryAPI;
