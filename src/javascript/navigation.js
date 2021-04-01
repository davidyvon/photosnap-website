const navigation = document.getElementById('nav')
const button = document.getElementById('hamburger')
const modal = document.getElementById('modal')

button.addEventListener('click', () => {
	button.classList.toggle('active')
	navigation.classList.toggle('active')
	modal.classList.toggle('active')
})
