window.onresize = resizeBackgrounds;
window.onload = resizeBackgrounds;

/**
 * Resizes the parent of the carousel background and the gallery based on the sizes of their images
 */
function resizeBackgrounds() {
    const gamePageHeader = document.getElementsByClassName("gamePageHeader")[0];
    gamePageHeader.style.height = window.getComputedStyle(slides[0])["height"];
    const galleryContainer = document.getElementById("galleryContainer");
    galleryContainer.style.height = window.getComputedStyle(galleryImages[0])["height"];
}

const slides = document.getElementsByClassName("slideshowImage");
var currentSlide = resetSlides();

/**
 * CAROUSEL BACKGROUND CODE
 */

/**
 * Resets all of the game page's background slides to the beginning state
 * @returns The index of the background/slide that is currently visible
 */
function resetSlides() {
    // console.log(slides.length);
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
}

setInterval(switchBackground, 5000)

/**
 * GALLERY CODE
 */

const galleryImages = document.getElementById("galleryContainer").getElementsByTagName("img");
var currentImage = initGallery();

/**
 * Initializes the gallery by revealing the first image and creating the buttons that correspond to each image
 * @returns The index of the current image being displayed
 */
function initGallery() {
    const galleryButtons = document.getElementById("galleryButtons");
    
    galleryImages[0].style.opacity = "100%";
    let selectedButton = createGalleryButton(0);
    selectedButton.classList.add("selected");
    galleryButtons.appendChild(selectedButton);

    for(let i = 1; i < galleryImages.length; i++) {
        galleryImages[i].style.opacity = "0%";
        galleryButtons.appendChild(createGalleryButton(i));
    }

    return 0;
}

/**
 * Creates a new gallery button
 * @param {Int} index The index corresponding to this button 
 * @returns The newly-created button
 */
function createGalleryButton(index) {
    const galleryButton = document.createElement("button");
    galleryButton.addEventListener("mousedown", () => {switchToImage(index)})
    return galleryButton;
}

/**
 * Switches the currently displayed gallery image to the given image
 * @param {Int} index The index of the image being swapped to
 */
function switchToImage(index) {
    let galleryButtonList = document.getElementById("galleryButtons").getElementsByTagName("button");
    galleryImages[currentImage].style.opacity = "0%";
    galleryButtonList[currentImage].classList.remove("selected");
    galleryImages[index].style.opacity = "100%";
    galleryButtonList[index].classList.add("selected");
    currentImage = index;
}