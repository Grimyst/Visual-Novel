const images = document.querySelectorAll(".pic img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

// open popup
images.forEach(img => {
    img.addEventListener("click", () => {
        popup.classList.add("show");
        popupImg.src = img.src;
    });
});

// close popup (button)
closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
});

// close when clicking outside image
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("show");
    }
});