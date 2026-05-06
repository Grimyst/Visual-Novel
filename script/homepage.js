const pictures = document.querySelectorAll(".picture");

    const images = [
        'images/v-de-leon-hehe.jpg',
        'images/v-de-leon-panime.jpg',
        'images/v-de-leon-sampol.jpg',
        'images/v-de-leon-sunset-teresa.jpg'
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

    setInterval(changePicture, 8000);