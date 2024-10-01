export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' })) // Return a success response
    .catch(() => Error()) // Handle errors by returning an Error object
    .finally(() => { console.log('Got a response from the API'); }); // Log the response
}
