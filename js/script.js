const btn = document.querySelector('.burger-btn')
const navbar = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

const icons = document.querySelectorAll('.header__skillsimage')
const body = document.querySelector('body')

const highImg = document.querySelectorAll('.all-img')

const highSlider = document.querySelectorAll('.pages__side--img')
const swipers = document.querySelectorAll('pages__swiper')

console.log(swipers)

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
	links.forEach(link => {
		link.addEventListener('click', () => {
			navbar.classList.remove('navbarview')
		})
	})
}

const handleClickSlider = () => {
	highSlider.forEach(e => {
		e.addEventListener('click', () => {
			e.classList.toggle('highslider')
			if (e.classList.contains('highslider')) {
				swipers.forEach(e => {
					e.classList.remove('mySwiperOne')
				})
			} else {
				e.classList.add('mySwiperOne')
			}
		})
	})
}

handleClickSlider()

const handleClickImage = () => {
	highImg.forEach((e, index) => {
		e.addEventListener('click', () => {
			if (e.classList.contains('action')) {
				e.classList.remove('action')
			} else {
				highImg.forEach((img, i) => {
					if (i !== index && img.classList.contains('action')) {
						img.classList.remove('action')
					}
				})
				e.classList.add('action')
			}
		})
	})
}

handleClickImage()

const swiper = new Swiper('.mySwiperOne, .mySwiperTwo, .mySwiperThree, .mySwiperFour', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		576: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		1200: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		1400: {
			slidesPerView: 1,
			spaceBetween: 50,
		},
	},
})

btn.addEventListener('click', handleBtn)
