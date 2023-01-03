// https://swiperjs.com/swiper-api

import { Autoplay, Navigation, Pagination, Parallax } from 'swiper';
import '../libs/swiper-bundle.min.js';
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Parallax, Autoplay],

    speed: 800,
    roundLengths: true,
    spaceBetween: 100,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    parallax: true,
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    //autoHeight: true,
    loop: true,
    pagination: {
        el: '.main-slider .dotts',
        clickable: true,
    },

    on: {
        init: function(swiper) {
            const allSlides = document.querySelector('.all');
            const allSlidesItems = document.querySelectorAll('.main-slider .swiper-slide:not(.swiper-slide-duplicate)');

            allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
        },
        slideChange: function(swiper) {
            const currentSlide = document.querySelector('.current');
            currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            console.log(swiper);
        }
    }
});

const swiperProduct = new Swiper('.swiper-product', {
    modules: [Navigation, Pagination, Autoplay],
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    observer: true,
    watchOverflow: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 20,
    roundLengths: true,
    loop: true,

    pagination: {
        el: '.slider-product .dotts',
        clickable: true,
    },

    breakpoints: {
        1: {
            slidesPerView: 1,
        },
        676: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    },

});

const swiperNovelties = new Swiper('.swiper-novelties', {
    modules: [Navigation, Pagination, Autoplay],
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    observer: true,
    watchOverflow: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 20,
    roundLengths: true,
    loop: true,

    pagination: {
        el: '.swiper-novelties .dotts',
        clickable: true,
    },

    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        676: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        1400: {
            slidesPerView: 3,
        },
    },

});