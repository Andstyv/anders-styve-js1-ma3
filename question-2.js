// QUESTION 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const gamelist = document.getElementById("gamelist");
const loading = document.getElementById("loading");

function displayError(message = "Unknown error") {
  return `<div class="error">${message}</div>`;
}

setTimeout(getFacts, 2000);

async function getFacts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    gamelist.innerHTML = "";
    loading.innerHTML = "";

    for (let i = 0; i < 8; i++) {
      gamelist.innerHTML += `<div class="game">${results.results[i].name} </br><span id="rating">Rating: ${results.results[i].rating}</span></br>Number of tags: ${results.results[i].tags.length}</div>`;
    }
  } catch (error) {
    loading.innerHTML = "";
    gamelist.innerHTML = displayError(`An error has occured when calling the API </br></br> ${error}`);
  }
}
