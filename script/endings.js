const slides = document.querySelectorAll(".list img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeCarousel);

function initializeCarousel(){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);

    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("prev").addEventListener("click", prevSlide);
}

function showCarousel(index){
    slideIndex = index;
    
    if(slideIndex >= slides.length){
        slideIndex = 0;
    }
    else if(slideIndex < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showCarousel(slideIndex);
    intervalId = setInterval(nextSlide, 5000);
}

function nextSlide(){
    slideIndex++;
    showCarousel(slideIndex);
}