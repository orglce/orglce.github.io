const urlParams = new URLSearchParams(window.location.search);
id = urlParams.get("id");

const fetchedData = async () => {
  const url =
    "https://cdn.contentful.com/spaces/b835i0wfa41a/environments/master/entries?access_token=oqH2zHeDTjBW6ZAObyiw5utOy8XXXsyv5TVHL1mojtI";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  const data = await response.json();
  return data;
};

fetchedPromise = fetchedData();

document.addEventListener("DOMContentLoaded", async () => {
  const buttonAllCats = document.getElementById("buttonAllCats");
  buttonAllCats.addEventListener("click", () => {
    location.href = "index.html";
  });
  divCats = document.getElementById("divCats");
  fetchedPromise.then((data) => {
    if (id) {
      currentCat = data.items.find((entry) => entry.sys.id === id);
      divCats.innerHTML = currentCat.fields.ime;
    } else {
      for (let entry of data.items) {
        newDiv = document.createElement("button");
        newDiv.innerText = entry.fields.ime;
        divCats.appendChild(newDiv);
        newDiv.addEventListener("click", () => {
          location.href = "index.html?id=" + entry.sys.id;
        });
      }
    }
  });
});
