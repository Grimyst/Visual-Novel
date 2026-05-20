const pictures = document.querySelectorAll(".picture");

    const images = [
        'Assets/images/v-de-leon-hehe.jpg',
        'Assets/images/v-de-leon-panime.jpg',
        'Assets/images/v-de-leon-sampol.jpg',
        'Assets/images/v-de-leon-sunset-teresa.jpg'
    ];

    let currentIndex = 0;
    let currentPicture = 0;

    function changePicture() {

        // Next image index
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0; 
        }

        // Current and next image elements
        const currentImg = pictures[currentPicture];
        const nextImg = pictures[1 - currentPicture];

        // Load next image first
        nextImg.src = images[currentIndex];

        // Fade transition
        nextImg.classList.add("active");
        currentImg.classList.remove("active");

        // Swap picture layers
        currentPicture = 1 - currentPicture;
    }

    setInterval(changePicture, 5000);





const card = document.querySelector('.card1');
let isFlipped = false;

card.addEventListener('click', () => {
    isFlipped = !isFlipped;
    
    document.getElementById('dynamic-style')?.remove();

    const style = document.createElement('style');
    style.id = 'dynamic-style';
    style.textContent = `.card1:hover { transform: rotateY(${isFlipped ? '0deg' : '180deg'}); }`;
    document.head.appendChild(style);
});