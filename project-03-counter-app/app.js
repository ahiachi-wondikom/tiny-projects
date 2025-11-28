let count = 0

const counterDisplay = document.getElementById('counter-display')
const increaseBtn = document.getElementById('increase-btn')
const decreaseBtn = document.getElementById('decrease-btn')
const resetBtn = document.getElementById('reset-btn')

// Function to update the display
function updateDisplay() {
	counterDisplay.textContent = count
}

// Function to increase count
function increase() {
	count = count + 1
	updateDisplay()
}

// Function to decrease count
function decrease() {
	count = count - 1
	updateDisplay()
}

// Function to reset count
function reset() {
	count = 0
	updateDisplay()
}

// Add event listeners (OUTSIDE the functions!)
increaseBtn.addEventListener('click', increase)
decreaseBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
