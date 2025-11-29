const modeToggle = document.getElementById('mode-toggle') // ? Select the button
const body = document.body
// ? Select the body element (hint: document.body)

modeToggle.addEventListener('click', () => {
	// ? Toggle the 'dark-mode' class on body
	body.classList.toggle('dark-mode')

	// ? Check current mode and update button text
	if (body.classList.contains('dark-mode')) {
		// ? Button should say "☀️ Light Mode"
		modeToggle.textContent = '☀️ Light Mode'
	} else {
		// ? Button should say "🌙 Dark Mode"
		modeToggle.textContent = '🌙 Dark Mode'
	}
})
