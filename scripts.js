
let sliderImages = document.querySelectorAll('.slider img');
let currentIndex = 0;

function showNextImage() {
    sliderImages[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % sliderImages.length;
    sliderImages[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000);
