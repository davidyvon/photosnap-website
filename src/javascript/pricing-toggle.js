document.addEventListener('DOMContentLoaded', () => {
	const toggleSwitch = document.getElementById('switch')
	const monthlyPrices = document.querySelectorAll('.price__month')
	const yearlyPrices = document.querySelectorAll('.price__year')
	const monthlyText = document.querySelector('.toggle__label--monthly')
	const yearlyText = document.querySelector('.toggle__label--yearly')

	function updatePriceData() {
		if (toggleSwitch.checked) {
			monthlyPrices.forEach((price) => {
				price.classList.toggle('active')
			})

			yearlyPrices.forEach((price) => {
				price.classList.toggle('active')
			})

			monthlyText.classList.toggle('active')
			yearlyText.classList.toggle('active')
		} else {
			monthlyPrices.forEach((price) => {
				price.classList.toggle('active')
			})

			yearlyPrices.forEach((price) => {
				price.classList.toggle('active')
			})

			monthlyText.classList.toggle('active')
			yearlyText.classList.toggle('active')
		}
	}

	if (toggleSwitch) {
		toggleSwitch.addEventListener('change', updatePriceData)
	}
})
