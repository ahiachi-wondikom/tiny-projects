let count = 0

const counterDisplay = document.getElementById('counter-display')
const increaseBtn = document.getElementById('increase-btn')
const decreaseBtn = document.getElementById('decrease-btn')
const resetBtn = document.getElementById('reset-btn')

function updateDisplay() {
	// ? Update counterDisplay to show the current count value
	counterDisplay.textContent = count
}

function increase() {
	increaseBtn.addEventListener('click', () => {
		count = count + 1
		document.getElementById('counter-display').innerText = count
	})
}

function decrease() {
	// ? Your logic here
	decreaseBtn.addEventListener('click', () => {
		count = count - 1
		document.getElementById('counter-display').innerText = count
	})
}

function reset() {
	resetBtn.addEventListener('click', () => {
		count = 0
		document.getElementById('counter-display').innerHTML = count
	})
}
