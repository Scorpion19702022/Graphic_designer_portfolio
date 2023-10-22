const icons = document.querySelectorAll('.header__skillsimage')
const body = document.querySelector('body')

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

// const loadIcons = () => {
// 	setTimeout(() => {
// 		icons.class
// 	}, 800)
// }
