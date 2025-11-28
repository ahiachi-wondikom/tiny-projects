const toggleBtn = document.getElementById('toggle-btn')
const contentBox = document.getElementById('content-box')

toggleBtn.addEventListener('click', () => {
	contentBox.classList.toggle('hidden')

	if (contentBox.classList.contains('hidden')) {
		toggleBtn.textContent = 'Show Content'
	} else {
		toggleBtn.textContent = 'Hide Content'
	}
})
