const passwordInput = document.getElementById('password-input')
const strengthBar = document.getElementById('strength-bar')
const strengthText = document.getElementById('strength-text')
const toggleBtn = document.getElementById('toggle-btn')

// Step 2: Function to check password strength
function checkPasswordStrength() {
	// Get what user typed
	const password = passwordInput.value
	const passwordLength = password.length

	// If empty, reset everything
	if (passwordLength === 0) {
		strengthBar.classList.remove('weak', 'medium', 'strong')
		strengthText.classList.remove('weak', 'medium', 'strong')
		strengthText.textContent = 'Enter a password to check its strength'
		return
	}

	// Check strength based on length
	if (passwordLength < 6) {
		// WEAK
		strengthBar.classList.remove('medium', 'strong')
		strengthBar.classList.add('weak')
		strengthText.classList.remove('medium', 'strong')
		strengthText.classList.add('weak')
		strengthText.textContent = '🔴 Weak - Use at least 6 characters'
	} else if (passwordLength >= 6 && passwordLength <= 10) {
		// MEDIUM
		strengthBar.classList.remove('weak', 'strong')
		strengthBar.classList.add('medium')
		strengthText.classList.remove('weak', 'strong')
		strengthText.classList.add('medium')
		strengthText.textContent = '🟡 Medium - Good, but can be stronger'
	} else {
		// STRONG
		strengthBar.classList.remove('weak', 'medium')
		strengthBar.classList.add('strong')
		strengthText.classList.remove('weak', 'medium')
		strengthText.classList.add('strong')
		strengthText.textContent = '🟢 Strong - Great password!'
	}
}

// Step 3: Listen for typing and check strength in real-time
passwordInput.addEventListener('input', function () {
	checkPasswordStrength()
})

// Step 4: Toggle show/hide password
toggleBtn.addEventListener('click', function () {
	const currentType = passwordInput.type

	if (currentType === 'password') {
		passwordInput.type = 'text'
		toggleBtn.textContent = '🙈 Hide Password'
	} else {
		passwordInput.type = 'password'
		toggleBtn.textContent = '👁️ Show Password'
	}
})
