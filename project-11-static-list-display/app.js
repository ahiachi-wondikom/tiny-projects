// Step 1: Create the array of movies
const movies = [
	'The Matrix',
	'Inception',
	'Interstellar',
	'The Shawshank Redemption',
	'Pulp Fiction',
	'The Dark Knight',
	'Forrest Gump',
	'Fight Club',
]

// Step 2: Get the elements we need
const movieList = document.getElementById('movie-list')
const totalCount = document.getElementById('total-count')

// Step 3: Loop through each movie and add it to the page
movies.forEach(function (movie) {
	// Create a new list item
	const listItem = document.createElement('li')

	// Set the movie name as text
	listItem.textContent = movie

	// Add it to the list
	movieList.appendChild(listItem)
})

// Step 4: Update the counter
totalCount.textContent = movies.length
