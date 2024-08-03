// on load
document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello World");

  const url =
    "https://cdn.contentful.com/spaces/b835i0wfa41a/environments/master/entries?access_token=oqH2zHeDTjBW6ZAObyiw5utOy8XXXsyv5TVHL1mojtI";

  title = document.getElementById("title");
  // set css display to none
  title.style.display = "none";

  // Use fetch to make a GET request to the endpoint
  fetch(url)
    .then((response) => {
      // Check if the response status is OK (status code 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      // Parse the response JSON data
      return response.json();
    })
    .then((data) => {
      // Handle the JSON data
      ime = data.items[0].fields.ime;
      // seto to element with id 'title'
      document.getElementById("title").innerText = ime;
      // set css display to block
      title.style.display = "block";
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("There was a problem with the fetch operation:", error);
    });
  // your code here
  console.log("DOM loaded");
});
