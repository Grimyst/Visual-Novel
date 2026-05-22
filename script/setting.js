// ===== SLIDER SYSTEM =====
// Slider for the place menu - displays place name, description, and image
// when user clicks on a place icon

// Current place index being displayed
let placeIndex = 1; // Starts with 1st place displayed

// Number of place icons visible at once in the sidebar
let place_iconpreview = 3;

// Initialize display with first place
show_place(placeIndex);

// ===== NAVIGATION FUNCTIONS =====
// Navigate through places using up/down arrows
function plus_place(n) {
    show_place(placeIndex += n);
}




// ===== MAIN DISPLAY FUNCTION =====
// Connects place icon to name, story description, and full image display
function show_place(n) {
    let i;
    
    // Get all place slide containers (with description)
    let slides = document.getElementsByClassName("place_slide");
    
    // Get all place icon elements
    let icons = document.getElementsByClassName("place_icon");
    
    // Wrap around: if index exceeds max places, go back to first
    if(n>slides.length){placeIndex = 1}
    
    // Wrap around: if index goes below 1, go to last place (INFINITE LOOP)
    if(n<1){placeIndex = slides.length}

    // ===== HIDE ALL SLIDES =====
    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    // ===== DISPLAY CURRENT SLIDE =====
    slides[placeIndex-1].style.display = "block";

  

    // Prevent start index from going below 0
    if (start < 0) start = 0;
    
    let end = start + visible_icons;

   
}