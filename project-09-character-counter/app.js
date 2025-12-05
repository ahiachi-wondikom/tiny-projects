const textInput = document.getElementById('text-input')
const charCount = document.getElementById('char-count')
const wordCount = document.getElementById('word-count')

// Step 2: Create a function that counts and updates
function updateCounts() {
	// Get whatever the user has typed
	const text = textInput.value

	// Count characters (easy - just use .length)
	const characterCount = text.length

	// Count words (trickier - need to split by spaces)
	let numberOfWords = 0

	// Check if the text is empty (after removing extra spaces)
	if (text.trim() === '') {
		// If empty, there are 0 words
		numberOfWords = 0
	} else {
		// If not empty, split by spaces and count the pieces
		const words = text.trim().split(' ')
		numberOfWords = words.length
	}

	// Update what the user sees on screen
	charCount.textContent = characterCount
	wordCount.textContent = numberOfWords
}

// Step 3: Listen for typing and update counts in real-time
textInput.addEventListener('input', function () {
	updateCounts()
})
