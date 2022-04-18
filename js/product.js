const gamesContainer = document.querySelector(".results");

// const mmorpg = "https://mmo-games.p.rapidapi.com/games";
const gamesURL = "https://nenorvalls.no/flower-power/gamehub/wp-json/wc/store/v1/products?consumer_key=ck_8b7263146b06be0805c5e9b1973c98fb03a3f819&consumer_secret=cs_0477da413d9d64e0957e4e3acfd8c68effa3dbfc"

const corsFix = "https://noroffcors.herokuapp.com/"

const corsUrl = corsFix + gamesURL;

async function fetchGames() {

	try {
		const response = await fetch(corsUrl, {
			"method": "GET",
			"headers": {
			// "x-rapidapi-host": "mmo-games.p.rapidapi.com",
			// "x-rapidapi-key": "e571381396mshbf0c399aa256715p147efcjsn84b2bc11dfa5"
		}});

		const json = await response.json();

		console.log(json);

		gamesContainer.innerHTML = "";

		const game = json;

		for (let i = 0; i < game.length; i++) {

			if (i === 50) {
				break;
				
			}

			gamesContainer.innerHTML += `<a href="details.html?id=${game[i].id}" class="card">
										 	<div class="grid-container">
											 	<img class="game-thumb" src="${game[i].images[0].src}"/>
											</div>
											<div class="game-details">
												<h4 class="game-title">${game[i].name}</h4>
												<p class="game-info">${game[i].categories[0].name}</p>
												<p class="game-info">${game[i].tags[0].name}</p>
												<button class="card-get-btn">Get</button>
												<p><span class="game-price">${game[i].prices.currency_symbol}${game[i].prices.price}</span></p>
											</div>
										</a>`;
		};
	}
	catch(error) {
		console.log(error);
		gamesContainer.innerHTML = message("error", "Something went wrong!", error);
	}
}

fetchGames();