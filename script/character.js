// ===== CHARACTER SLIDER SYSTEM =====
// Slider for the character menu - displays character name, description, and image
// when user clicks on a character icon

// Current character index being displayed
let charIndex = 1; // Starts with 1st character displayed

// Number of character icons visible at once in the sidebar
let char_iconpreview = 3;

// Initialize display with first character
show_character(charIndex);

// ===== NAVIGATION FUNCTIONS =====
// Navigate through characters using up/down arrows
function plus_character(n) {
    show_character(charIndex += n);
}

// Navigate to next group of character icons
function next_group(direction) {
    show_character(charIndex += direction * char_iconpreview);
}

// Set to specific character when user clicks an icon
function current_char(n){
    show_character(charIndex = n);
}

// ===== MAIN DISPLAY FUNCTION =====
// Connects character icon to name, story description, and full image display
function show_character(n) {
    let i;
    
    // Get all character slide containers (with description)
    let slides = document.getElementsByClassName("char_slide");
    
    // Get all character icon elements
    let icons = document.getElementsByClassName("char_icon");
    
    // Wrap around: if index exceeds max characters, go back to first
    if(n>slides.length){charIndex = 1}
    
    // Wrap around: if index goes below 1, go to last character (INFINITE LOOP)
    if(n<1){charIndex = slides.length}

    // ===== HIDE ALL SLIDES =====
    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    // ===== DISPLAY CURRENT SLIDE =====
    slides[charIndex-1].style.display = "block";

    // ===== RESET ICON HIGHLIGHTING =====
    for (i = 0; i < icons.length; i++) {
        icons[i].classList.remove("active");
    }
    
    // Highlight the middle icon as active
    icons[1].classList.add("active");

    // ===== SHOW ONLY 3 VISIBLE ICONS =====
    let visible_icons = 3;
    let start = charIndex - 2;

    // Prevent start index from going below 0
    if (start < 0) start = 0;
    
    let end = start + visible_icons;

    // Adjust range if it exceeds total icons
    if (end > icons.length) {
        end = icons.length;
        start = end - visible_icons;
    }

    // Hide all icons first
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = "none";
    }

    // Show only icons in the visible range
    for (let i = start; i < end; i++) {
        icons[i].style.display = "block";
    }

}