function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.log('Got a response from the API');
      return new Error();
    });
}

// Usage example:
const somePromise = /* Your promise here */;

handleResponseFromAPI(somePromise)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
