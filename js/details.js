
const gameContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const detailsURL = "https://nenorvalls.no/flower-power/gamehub/wp-json/wc/v3/products/" + id;

const key = "?consumer_key=ck_6131069f7cf8fe34078860b7f32de680257422f1&consumer_secret=cs_81c77c45ce7a85e90c9f21bc157818964c403cc3"


async function getGame() {

    try {
        const response = await fetch(detailsURL + key)

        const details = await response.json();

        const newPageTitle = document.querySelector("title");

        newPageTitle.innerHTML = `${details.name}`;

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