const gamesContainer = document.querySelector(".results");

const url = "https://mmo-games.p.rapidapi.com/games?sort-by=popularity";

const corsFix = "https://noroffcors.herokuapp.com/"

const corsUrl = corsFix + url;

async function fetchGames() {

	try {
		const response = await fetch(corsUrl, {
			"method": "GET",
			"headers": {
			"x-rapidapi-host": "mmo-games.p.rapidapi.com",
			"x-rapidapi-key": "e571381396mshbf0c399aa256715p147efcjsn84b2bc11dfa5"
		}});

		const json = await response.json();

		console.log(json);

		gamesContainer.innerHTML = "";

		const game = json;

		for (let i = 0; i < game.length; i++) {

			if (i === 9) {
				break;
			}
			gamesContainer.innerHTML += `<a href="details.html?id=${game[i].id}" class="card">
										 	<div class="grid-container">
											 	<img class="game-thumb" src="${game[i].thumbnail}"/>
											</div>
											<div class="game-details">
												<h4 class="game-title">${game[i].title}</h4>
												<p class="game-info">${game[i].genre}</p>
												<p class="game-info">${game[i].platform}</p>
												<button class="card-get-btn">Get</button>
												<p><span class="game-price">$25</span></p>
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