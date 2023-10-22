const btn = document.querySelector('.burger-btn')
const navbar = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

const icons = document.querySelectorAll('.header__skillsimage')
const body = document.querySelector('body')

console.log(btn)
console.log(navbar)
console.log(links)

body.onload = () => {
	loadIcons()
}

const loadIcons = () => {
	setTimeout(() => {
		icons.forEach(e => {
			e.classList.remove('header__actionicons')
		})
	}, 800)
}

const handleBtn = () => {
	navbar.classList.toggle('navbarview')
	document.body.classList.toggle('stickibody')
	links.forEach(link => {
		link.addEventListener('click', () => {
			navbar.classList.remove('navbarview')
		})
	})
}

btn.addEventListener('click', handleBtn)
