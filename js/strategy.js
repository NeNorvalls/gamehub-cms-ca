const URL = "https://nenorvalls.no/flower-power/gamehub/wp-json/wc/v3/products/categories/19/";

const key = "?consumer_key=ck_9fdfd6408c40e2aa4e0fb91a1a3d2d6b017266b4&consumer_secret=cs_a8b68264598dc44702fb82feba6cfc257bee154f";

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

            if (i === 50) {
                break;

            }

            gamesContainer.innerHTML += `<a href="details.html?id=${game[i].id}" class="card">
            <div class="grid-container">
                <img class="game-thumb" src="${game[i].images[0].src}" />
            </div>
            <div class="game-details">
                <h4 class="game-title">${game[i].name}</h4>
                <p class="game-info">${game[i].categories[0].name}</p>
                <p class="game-info">${game[i].tags[0].name}</p>
                <button class="card-get-btn">Get</button>

            </div>
        </a>;`
        };
    }
    catch (error) {
        console.log(error);
    }
}

getGames();