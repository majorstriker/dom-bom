let sliderEl = document.querySelector('.slider');

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
sliderEl.insertAdjacentElement("afterbegin", loadIcon);

let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
sliderEl.insertAdjacentElement("beforeend", leftArrow);

let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
sliderEl.insertAdjacentElement("beforeend", rightArrow);

let dot1El = document.querySelector('.dot1');
let dot2El = document.querySelector('.dot2');
let dot3El = document.querySelector('.dot3');

window.addEventListener('load', function() {
    leftArrow.addEventListener('click', function() {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function() {
        images.setNextRightImage();
    });

    dot1El.addEventListener('click', function() {
        images.showDotImage1();
    });

    dot2El.addEventListener('click', function() {
        images.showDotImage2();
    });

    dot3El.addEventListener('click', function() {
        images.showDotImage3();
    });

    loadIcon.style.display = 'none';
    images.init();
});

let images = {
    currentIdx: 0,

    slides: [],

    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    },

    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    hideVisibleImage() {
        this.slides[this.currentIdx].classList.add("hidden-slide");
    },

    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
    },

    showDotImage1() {
        this.hideVisibleImage();
        this.currentIdx = 0;
        this.showImageWithCurrentIdx();
    },

    showDotImage2() {
        this.hideVisibleImage();
        this.currentIdx = 1;
        this.showImageWithCurrentIdx();
    },

    showDotImage3() {
        this.hideVisibleImage();
        this.currentIdx = 2;
        this.showImageWithCurrentIdx();
    },
}