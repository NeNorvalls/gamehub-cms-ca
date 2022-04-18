
const gameContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


// const detailsURL = "https://free-to-play-games-database.p.rapidapi.com/api/game?rapidapi-key=e571381396mshbf0c399aa256715p147efcjsn84b2bc11dfa5" + id;
const detailsURL = "https://mmo-games.p.rapidapi.com/game?id=" + id;

console.log(detailsURL);

async function fetchGame() {

    try {
        const response = await fetch(detailsURL, {
            "method": "GET",
	"headers": {
		"x-rapidapi-host": "mmo-games.p.rapidapi.com",
		"x-rapidapi-key": "e571381396mshbf0c399aa256715p147efcjsn84b2bc11dfa5"
        }});
        const details = await response.json();
        console.log(details);

        const newPageTitle = document.querySelector("title");

        newPageTitle.innerHTML = `${details.title}`;

        createHTML(details);
    }
    catch(error) {
        console.log(error);
        gameContainer.innerHTML = message("error", "An error occured", error);
    }
}

fetchGame();

function createHTML(game) {

    gameContainer.innerHTML = ` <h1>${game.title}</h1>
                                <div class="details-container">
                                    <img class="game-details-thumb" src="${game.thumbnail}" alt="${game.title}">
                                </div>
                                <div class="cart-btn-wrapper">
                                    <a href="cart.html" class="cart-btn product-btn">Add to cart $25</a>
                                </div>
                                <div class="game-info-container">
                                    <p class="game-info">${game.description}</p>
                                    <p><span class="game-info"Genre: ${game.genre}</span></p>
                                    <p><span class="game-info">Released: ${game.release_date}</span></p>
                                </div>

                               `
}