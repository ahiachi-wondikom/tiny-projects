// Step 1: Get all the elements
const itemInput = document.getElementById('item-input')
const addBtn = document.getElementById('add-btn')
const itemList = document.getElementById('item-list')
const itemCount = document.getElementById('item-count')
const emptyMessage = document.getElementById('empty-message')

// Step 2: Function to add an item
function addItem() {
	// Get the text from input
	const itemText = itemInput.value

	// Check if empty
	if (itemText.trim() === '') {
		alert('Please enter an item!')
		return
	}

	// Create new list item
	const listItem = document.createElement('li')
	listItem.textContent = itemText

	// Add to list
	itemList.appendChild(listItem)

	// Clear input and focus
	itemInput.value = ''
	itemInput.focus()

	// Update counter and message
	updateCounter()
	toggleEmptyMessage()
}

// Step 3: Function to update counter
function updateCounter() {
	const count = itemList.children.length
	itemCount.textContent = count
}

// Step 4: Function to show/hide empty message
function toggleEmptyMessage() {
	if (itemList.children.length === 0) {
		emptyMessage.classList.remove('hidden')
	} else {
		emptyMessage.classList.add('hidden')
	}
}

// Step 5: Add event listeners
addBtn.addEventListener('click', function () {
	addItem()
})

itemInput.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		addItem()
	}
})
