console.log("Hello World");

const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Use fetch to make a GET request to the endpoint
fetch(url)
  .then(response => {
    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // Parse the response JSON data
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log('Data:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });
