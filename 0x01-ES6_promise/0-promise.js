export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Your asynchronous API request or any other async logic here
    // For example, fetching data from an API:
    fetch('https://api.example.com/data')
      .then(response => {
        if (response.status === 200) {
          resolve(response.json());
        } else {
          reject('Error: Unable to fetch data');
        }
      })
      .catch(error => {
        reject('Error: ' + error);
      });
  });
}

