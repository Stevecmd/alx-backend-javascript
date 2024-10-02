export default function guardrail(mathFunction) {
    // Create the queue array
    const queue = [];

  try {
    // Execute the mathFunction
    const result = mathFunction();
    // Append the result to the queue
    queue.push(result);
  } catch (error) {
    // Append the error message to the queue
    queue.push(`Error: ${error.message}`);
  } finally {
    // Always append this message
    queue.push('Guardrail was processed');
  // Return the queue
  return queue;
  }
}
