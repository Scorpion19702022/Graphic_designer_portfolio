const btn = document.querySelector('.burger-btn')
const navbar = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

const icons = document.querySelectorAll('.header__skillsimage')
const body = document.querySelector('body')

const highImg = document.querySelectorAll('.all-img')

const viewTextFront = document.querySelector('.textfront')
const bigSwipersFront = document.querySelectorAll('.swiperfront')
const pagesWrapperFront = document.querySelector('.wrapperfront')
const bigImgSwiperFront = document.querySelectorAll('.imgfront')
const viewIconFront = document.querySelectorAll('.iconsfront')

const viewTextSides = document.querySelector('.textsides')
const bigSwipersSides = document.querySelectorAll('.swipersides')
const pagesWrapperSides = document.querySelectorAll('.wrappersides')
const bigImgSwiperSides = document.querySelectorAll('.imgsides')
const viewIconSides = document.querySelectorAll('.iconssides')

const viewTextMotoSides = document.querySelector('.textmotosides')
const bigSwipersMotoSides = document.querySelectorAll('.swipermotosides')
const pagesWrapperMotoSides = document.querySelectorAll('.wrappermotosides')
const bigImgSwiperMotoSides = document.querySelectorAll('.imgmotosides')
const viewIconMotoSides = document.querySelectorAll('.iconsmotosides')

const viewTextCommerSides = document.querySelector('.textcommersides')
const bigSwipersCommerSides = document.querySelectorAll('.swipercommersides')
const pagesWrapperCommerSides = document.querySelectorAll('.wrappercommersides')
const bigImgSwiperCommerSides = document.querySelectorAll('.imgcommersides')
const viewIconCommerSides = document.querySelectorAll('.iconscommersides')

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

const handleClickSliderFront = () => {
	pagesWrapperFront.addEventListener('click', () => {
		bigSwipersFront.forEach(slider => {
			slider.classList.toggle('highslider')
			if (slider.classList.contains('highslider')) {
				bigImgSwiperFront.forEach(img => {
					img.classList.add('imgBig')
				})
				viewIconFront.forEach(icon => {
					icon.classList.add('viewicon')
				})
				viewTextFront.classList.add('viewicon')
			} else {
				bigImgSwiperFront.forEach(img => {
					img.classList.remove('imgBig')
				})
				viewIconFront.forEach(icon => {
					icon.classList.remove('viewicon')
				})
				viewTextFront.classList.remove('viewicon')
			}
		})
	})
}

handleClickSliderFront()

const handleClickSliderSides = () => {
	pagesWrapperCommerSides.forEach(e => {
		e.addEventListener('click', () => {
			bigSwipersCommerSides.forEach(slider => {
				slider.classList.toggle('highslider')
				if (slider.classList.contains('highslider')) {
					bigImgSwiperCommerSides.forEach(img => {
						img.classList.add('imgBig')
					})
					viewIconCommerSides.forEach(icon => {
						icon.classList.add('viewicon')
					})
					viewTextCommerSides.classList.add('viewicon')
				} else {
					bigImgSwiperCommerSides.forEach(img => {
						img.classList.remove('imgBig')
					})
					viewIconCommerSides.forEach(icon => {
						icon.classList.remove('viewicon')
					})
					viewTextCommerSides.classList.remove('viewicon')
				}
			})
		})
	})
}

handleClickSliderSides()

const handleClickSliderMotoSides = () => {
	pagesWrapperMotoSides.forEach(e => {
		e.addEventListener('click', () => {
			bigSwipersMotoSides.forEach(slider => {
				slider.classList.toggle('highslider')
				if (slider.classList.contains('highslider')) {
					bigImgSwiperMotoSides.forEach(img => {
						img.classList.add('imgBig')
					})
					viewIconMotoSides.forEach(icon => {
						icon.classList.add('viewicon')
					})
					viewTextMotoSides.classList.add('viewicon')
				} else {
					bigImgSwiperMotoSides.forEach(img => {
						img.classList.remove('imgBig')
					})
					viewIconMotoSides.forEach(icon => {
						icon.classList.remove('viewicon')
					})
					viewTextMotoSides.classList.remove('viewicon')
				}
			})
		})
	})
}

handleClickSliderMotoSides()

const handleClickSliderCommerSides = () => {
	pagesWrapperSides.forEach(e => {
		e.addEventListener('click', () => {
			bigSwipersSides.forEach(slider => {
				slider.classList.toggle('highslider')
				if (slider.classList.contains('highslider')) {
					bigImgSwiperSides.forEach(img => {
						img.classList.add('imgBig')
					})
					viewIconSides.forEach(icon => {
						icon.classList.add('viewicon')
					})
					viewTextSides.classList.add('viewicon')
				} else {
					bigImgSwiperSides.forEach(img => {
						img.classList.remove('imgBig')
					})
					viewIconSides.forEach(icon => {
						icon.classList.remove('viewicon')
					})
					viewTextSides.classList.remove('viewicon')
				}
			})
		})
	})
}

handleClickSliderCommerSides()

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
	spaceBetween: 40,
	loop: true,
	autoplay: {
		delay: 3000,
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
