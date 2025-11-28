const inputText = document.getElementById('text-input')
const echoDisplay = document.getElementById('echo-display')

inputText.addEventListener('input', function () {
	echoDisplay.textContent = inputText.value
})
