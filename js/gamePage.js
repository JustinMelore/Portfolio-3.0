window.onresize = resizeGameBackground;
window.onload = resizeGameBackground;

/**
 * Resizes the parent of the carousel background based on the size of its images
 */
function resizeGameBackground() {
    const gamePageHeader = document.getElementsByClassName("gamePageHeader")[0];
    gamePageHeader.style.height = window.getComputedStyle(document.getElementsByClassName("slideshowImage")[0])["height"];
    console.log(`${gamePageHeader.offsetHeight} versus ${document.getElementsByClassName("slideshowImage")[0].offsetHeight}`);
}
