
const gameContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


// const detailsURL = "https://free-to-play-games-database.p.rapidapi.com/api/game?rapidapi-key=e571381396mshbf0c399aa256715p147efcjsn84b2bc11dfa5" + id;
const detailsURL = "https://nenorvalls.no/flower-power/gamehub/wp-json/wc/v3/products/" + id;

const key = "?consumer_key=ck_9fdfd6408c40e2aa4e0fb91a1a3d2d6b017266b4&consumer_secret=cs_a8b68264598dc44702fb82feba6cfc257bee154f"

console.log(detailsURL);

async function getGame() {

    try {
        const response = await fetch(detailsURL + key)

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

getGame();

function createHTML(game) {

    gameContainer.innerHTML = ` <h1>${game.name}</h1>
                                <div class="details-container">
                                    <img class="game-details-thumb" src="${game.images[0].src}" alt="${game.title}">
                                </div>
                                <div class="cart-btn-wrapper">
                                    <a href="cart.html" class="cart-btn product-btn">Add to cart $${game.price}</a>
                                </div>
                                <div class="game-info-container">
                                    <p class="game-info">${game.short_description}</p>
                                    <p><span class="game-info"Genre: ${game.genre}</span></p>
                                </div>

                               `
}