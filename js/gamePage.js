window.onresize = resizeGameBackground;
window.onload = resizeGameBackground;

/**
 * Resizes the parent of the carousel background based on the size of its images
 */
function resizeGameBackground() {
    const gamePageHeader = document.getElementsByClassName("gamePageHeader")[0];
    gamePageHeader.style.height = window.getComputedStyle(slides[0])["height"];
    console.log(`${gamePageHeader.offsetHeight} versus ${slides[0].offsetHeight}`);
}

const slides = document.getElementsByClassName("slideshowImage");
var currentSlide = resetSlides();

/**
 * Resets all of the game page's background slides to the beginning state
 * @returns The index of the background/slide that is currently visible
 */
function resetSlides() {
    console.log(slides.length);
    slides[0].style.opacity = "100%";
    for(let i = 1; i < slides.length; i++) {
        slides[i].style.opacity = "0%"
    }
    return 0;
}

function switchBackground() {
    slides[currentSlide].style.opacity = "0%";
    currentSlide++;
    if(currentSlide >= slides.length) currentSlide = 0;
    slides[currentSlide].style.opacity = "100%";
    console.log("Switched background");
}

setInterval(switchBackground, 5000)
