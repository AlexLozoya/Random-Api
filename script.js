// --- Independent API handlers for each container ---
document.addEventListener('DOMContentLoaded', () => {
	
    // Dog API
	document.getElementById('dog-btn').addEventListener('click', async () => {
		const output = document.getElementById('dog-output');
		output.textContent = 'Loading...';
		try {
			const resp = await fetch('https://dog.ceo/api/breeds/image/random');
			const data = await resp.json();
			output.innerHTML = `<img src="${data.message}" alt="Dog" style="max-width:100%;">`;
		} catch (err) {
			output.textContent = 'Error loading dog image.';
		}
	});

	// Cat API
	document.getElementById('cat-btn').addEventListener('click', async () => {
		const output = document.getElementById('cat-output');
		output.textContent = 'Loading...';
		try {
			const resp = await fetch('https://api.thecatapi.com/v1/images/search');
			const data = await resp.json();
			output.innerHTML = `<img src="${data[0].url}" alt="Cat" style="max-width:100%;">`;
		} catch (err) {
			output.textContent = 'Error loading cat image.';
		}
	});

	// Weather API 
	document.getElementById('weather-btn').addEventListener('click', async () => {
		const output = document.getElementById('weather-output');
		output.textContent = 'Loading...';
		try {
			const resp = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true');
			const data = await resp.json();
			const weather = data.current_weather;
			output.textContent = `Temp: ${weather.temperature}°C, Windspeed: ${weather.windspeed} km/h`;
		} catch (err) {
			output.textContent = 'Error loading weather.';
		}
	});


	// Currency Search API
	document.getElementById('currency-search-btn').addEventListener('click', async () => {
		const input = document.getElementById('currency-search').value.trim().toLowerCase();
		const output = document.getElementById('currency-output');
		const match = input.match(/^([a-z]{3})\s*to\s*([a-z]{3})$/);
		if (!match) {
			output.textContent = 'Please enter a valid format: usd to gbp';
			return;
		}
		const from = match[1];
		const to = match[2];
		output.textContent = 'Loading...';
		try {
			const resp = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`);
			const data = await resp.json();
			if (data[from] && data[from][to]) {
				output.textContent = `${from.toUpperCase()} to ${to.toUpperCase()}: ${data[from][to]}`;
			} else {
				output.textContent = `Rate for ${from.toUpperCase()} to ${to.toUpperCase()} not found.`;
			}
		} catch (err) {
			output.textContent = 'Error loading exchange rate.';
		}
	});

	// Movies API
	document.getElementById('movies-btn').addEventListener('click', async () => {
		const output = document.getElementById('movies-output');
		output.textContent = 'Loading...';
		try {
			// Demo: public API for movies is limited, so show static
			output.textContent = 'Trending: Dune, Barbie, Oppenheimer';
		} catch (err) {
			output.textContent = 'Error loading movies.';
		}
	});

	// GitHub API
	document.getElementById('github-btn').addEventListener('click', async () => {
		const output = document.getElementById('github-output');
		output.textContent = 'Loading...';
		try {
			const resp = await fetch('https://api.github.com/users/octocat');
			const data = await resp.json();
			output.textContent = `User: ${data.login}, Followers: ${data.followers}`;
		} catch (err) {
			output.textContent = 'Error loading GitHub user.';
		}
	});

	// Joke API
	document.getElementById('joke-btn').addEventListener('click', async () => {
		const output = document.getElementById('joke-output');
		output.textContent = 'Loading...';
		try {
			const resp = await fetch('https://official-joke-api.appspot.com/random_joke');
			const data = await resp.json();
			output.textContent = `${data.setup} ... ${data.punchline}`;
		} catch (err) {
			output.textContent = 'Error loading joke.';
		}
	});

	// Random Baseball Team
	document.getElementById('baseball-btn').addEventListener('click', () => {
		const output = document.getElementById('baseball-output');
		output.textContent = 'Loading...';
		const teams = [
			'New York Yankees',
			'Los Angeles Dodgers',
			'Chicago Cubs',
			'Boston Red Sox',
			'San Francisco Giants',
			'Houston Astros',
			'Atlanta Braves',
			'St. Louis Cardinals',
			'Philadelphia Phillies',
			'Toronto Blue Jays',
			'Cleveland Guardians',
			'San Diego Padres',
			'Milwaukee Brewers',
			'Minnesota Twins',
			'Seattle Mariners',
			'Texas Rangers',
			'Detroit Tigers',
			'Miami Marlins',
			'Arizona Diamondbacks',
			'Baltimore Orioles'
		];
		const team = teams[Math.floor(Math.random() * teams.length)];
		output.textContent = `Baseball Team: ${team}`;
	});
});