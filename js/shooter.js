const URL = "https://nenorvalls.no/flower-power/gamehub/wp-json/wc/v3/products/"

const key = "?consumer_key=ck_6131069f7cf8fe34078860b7f32de680257422f1&consumer_secret=cs_81c77c45ce7a85e90c9f21bc157818964c403cc3&category=24"

const gamesContainer = document.querySelector(".results")

async function getGames() {
    try {
        const response = await fetch(URL + key);
        const results = await response.json();
        console.log(results);

        gamesContainer.innerHTML = "";

        const json = results;
        const game = json;

        for (let i = 0; i < game.length; i++) {


            gamesContainer.innerHTML += `<a href="details.html?id=${game[i].id}" class="card">
            <div class="grid-container">
                <img class="game-thumb" src="${game[i].images[0].src}" />
            </div>
            <div class="game-details">
                <h4 class="game-title">${game[i].name}</h4>
                <p class="game-info">${game[i].categories[0].name}</p>
                <p class="game-info">${game[i].tags[0].name}</p>
				<p><span class="game-price">$${game[i].price}.99</span></p>
                <button class="card-get-btn">Get</button>


            </div>
        </a>`;
        };
    }
    catch (error) {
        console.log(error);
    }
}

getGames();