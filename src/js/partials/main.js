
/* header */
$(document).ready(function() {
	$(".menu-header__burger").click(function () {
		$('.menu-header__burger, .mobile-header-menu, body').toggleClass("active");
	});
	$(".menu-header__link-mobile").click(function () {
		$('.menu-header__burger, .mobile-header-menu, body').removeClass("active");
	});
	$(".menu-header__burger").click(function () {
		$('.header').toggleClass("padd");
	});
	$(".menu-header__link-mobile").click(function () {
		$('.header').removeClass("padd");
	});
	$(".comfort__point").hover(function () {
		$(this).toggleClass("animPoint");
	});
})
/* pages */
var swiper = new Swiper(".mySwiper", {
	slidePerView: 1,
	allowTouchMove: false,
	autoHeight: true,
	pagination: {
		el: ".galary__btns",
		clickable: true,
	},
});
/* ---------------------появление элементов при прокрутке--------------------------- */
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('active');
		}
	});
}
let options = {
	threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.show');
for (let elm of elements) {
	observer.observe(elm);
}


/* навигация */
$(window).scroll(function() {
	var height = $(window).scrollTop();

	if(height > 50){
		$('.header').addClass('header-newClass');
	} else{

		$('.header').removeClass('header-newClass');
	}
});
$('.click').on('click', function() {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 400,
		easing: "linear"
	});

	return false;
});


/* ---------hugge---------------hugge-------------- */
var swiper = new Swiper(".hugge__swiper", {
	spaceBetween: 0,
	touchReleaseOnEdges: true,
	pagination: {
		el: ".hugge__swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".hugge__swiper-arrow-next",
		prevEl: ".hugge__swiper-arrow-prev",
	},
});
$(document).ready(function() {
	$(".hugge__popap-back, .hugge__popap-close").click(function () {
		$('.hugge__popap-back, .hugge__popap-wrapper, body').removeClass("active");
		$('body, .header, .hugge__popap-wrapper ').css('padding-right','');
	});
	$(".hugge__btn").click(function () {
		var scrollWidth= window.innerWidth-$(document).width();
		$('.hugge__popap-back, .hugge__popap-wrapper, body').addClass("active");
		$('body, .header, .hugge__popap-wrapper ').css('padding-right',scrollWidth);
	});
})



/* comfort */
$(".comfort__btn").click(function () {
	$('.comfort-video').addClass("show");
	var scrollWidth= window.innerWidth-$(document).width();
	$('body').addClass("active");
	$('body, .header ').css('padding-right',scrollWidth);
});
$(".comfort-video__close").click(function () {
	$('.comfort-video').removeClass("show");
	$('body').removeClass("active");
	$('body, .header ').css('padding-right','');
	stopClipcomfort(video__playercomfort);
	playcomfort.classList.remove('hide');
	comfort__video__body.classList.remove('hide');
});
$(document).on('keydown', function(e) {
	if (e.keyCode == 27)
		$('.comfort-video').removeClass("show");
		document.body.style.overflowY = "scroll";
		stopClipcomfort(video__playercomfort);
		playcomfort.classList.remove('hide');
		comfort__video__body.classList.remove('hide');
});

function playClipcomfort(media) {
	media.play();
}
function stopClipcomfort(media) {
	media.pause();
}

var video__playercomfort = document.getElementById("comfort-video__player");
const playcomfort = document.querySelector('.comfort-video__img');
const pausecomfort = document.querySelector('.comfort-video__pause');
const comfort__video__body = document.querySelector('.comfort-video__body');

playcomfort.addEventListener("click", function(e) {
	playClipcomfort(video__playercomfort);
	this.classList.add('hide');
	comfort__video__body.classList.add('hide');
});
pausecomfort.addEventListener("click", function (e) {
	stopClipcomfort(video__playercomfort);
	playcomfort.classList.remove('hide');
	comfort__video__body.classList.remove('hide');
});

gsap.to(".comfort__body-img", {
	yPercent: -40,
	ease: "none",
	scrollTrigger: {
		trigger: ".comfort__body-img",
		scrub: 1,
	}, 
});



/* instruction-video */
function playClipinstruction(media) {
	media.play();
}
function stopClipinstruction(media) {
	media.pause();
}

var video__playerinstruction = document.getElementById("instruction-video__player");
const playinstruction = document.querySelector('.instruction-video__img');
const pauseinstruction = document.querySelector('.instruction-video__pause');
const instruction__video__body = document.querySelector('.instruction-video__body');

playinstruction.addEventListener("click", function(e) {
	playClipinstruction(video__playerinstruction);
	this.classList.add('hide');
	instruction__video__body.classList.add('hide');
});
pauseinstruction.addEventListener("click", function (e) {
	stopClipinstruction(video__playerinstruction);
	playinstruction.classList.remove('hide');
	instruction__video__body.classList.remove('hide');
});


/* constructive */
var swiper = new Swiper(".constructive__left-swiper", {
	slidesPerView: 1,
	effect: "fade",
	speed: 0,
});
var constructive__swiper = new Swiper(".constructive__swiper", {
	pagination: {
		el: ".constructive__pagination",
		type: "fraction",
	},
	touchReleaseOnEdges: true,
	navigation: {
		nextEl: ".constructive__btn-next",
		prevEl: ".constructive__btn-prev",
	},
	thumbs: {
		swiper: swiper,
	},
});

gsap.to(".constructive__img-bottom", {
	yPercent: -15,
	ease: "none",
	scrollTrigger: {
		trigger: ".constructive__img-bottom-wrapper",
		scrub: 1,
	}, 
});



/* set */
var swiper = new Swiper(".set__swiper", {
	pagination: {
		el: ".set__pagination",
		type: "fraction",
	},
	touchReleaseOnEdges: true,
	navigation: {
		nextEl: ".set__btn-next",
		prevEl: ".set__btn-prev",
	},
});
var swiper = new Swiper(".transformation__swiper", {
	spaceBetween: 15,
	centeredSlides: true,
	loop: true,
	slideToClickedSlide: true,
	loopAdditionalSlides: 100,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		769: {
			spaceBetween: 68,
		},
	},
});


/* last */
$(document).ready(function() {
	$('.last__title-spoiler').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(600);
	});
}); 

	$(document).ready(function() {
		$('.oven-last-item__subtitle').click(function(event) {
			$(this).toggleClass('active').next().slideToggle(600);
		});
	}); 
	$(document).ready(function() {
		$('.fuel-last-item__subtitle').click(function(event) {
			$(this).toggleClass('active').next().slideToggle(600);
		});
	}); 
	$(document).ready(function() {
		$('.experience-last-item__subtitle').click(function(event) {
			$(this).toggleClass('active').next().slideToggle(600);
		});
	}); 


$(".order__bnt-buy").click(function () {
	$('.order__popap-back, .order__popap').addClass("active");
});
$(".order__popap-back, .order__popap--close").click(function () {
	$('.order__popap-back, .order__popap').removeClass("active");
});




$(document).ready(function() {
	$(".safety__description-btn").on('mouseenter click',function () {
		$('.safety__description-popap').addClass("active");
	});

	$(".safety__description-btn").on('mouseout',function (event) {
		if (!$(event.relatedTarget).hasClass('safety__description-popap') && $(event.relatedTarget).parents('.safety__description-popap').length === 0){
			$('.safety__description-popap').removeClass("active");
		}
	});
	$(".safety__description-popap").on('mouseout',function (event) {
		if (!$(event.toElement).hasClass('safety__description-btn') && $(event.toElement).parents('.safety__description-popap').length === 0){
			$('.safety__description-popap').removeClass("active");
		}
	});
})

