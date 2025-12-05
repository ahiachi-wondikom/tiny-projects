const textInput = document.getElementById('text-input')
const charCount = document.getElementById('char-count')
const wordCount = document.getElementById('word-count')

function updateCounts() {
	const text = textInput.value

	const characterCount = text.length

	let numberOfWords = 0

	if (text.trim() === '') {
		numberOfWords = 0
	} else {
		const words = text.trim().split(' ')
		numberOfWords = words.length
	}

	charCount.textContent = characterCount
	wordCount.textContent = numberOfWords
}

textInput.addEventListener('input', function () {
	updateCounts()
})
