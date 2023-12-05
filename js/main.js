$(document).ready( function() {
    const $slides = $('.slides');
    const $navButtons = $('.slider-nav a');

    let autoplayInterval;
    let currentIndex = 0;

    $navButtons.eq(currentIndex).addClass('active');

    function updateActiveButton() {
        $navButtons.removeClass('active');
        $navButtons.eq(currentIndex).addClass('active');
    }

    $navButtons.click(function(e) {
        e.preventDefault();
        currentIndex = $(this).parent().index();
        moveSlides();
        updateActiveButton();
    })

    function moveSlides() {
        $slides.css('transform', `translateX(-${currentIndex * 100}%)`);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(function () {
            currentIndex = (currentIndex + 1) % $navButtons.length;
            moveSlides();
            updateActiveButton();
            stopAutoPlay();
            startAutoplay();
        }, 5000)
    }

    function stopAutoPlay() {
        clearInterval(autoplayInterval);
    }

    startAutoplay();
})
