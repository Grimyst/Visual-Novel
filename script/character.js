//this is for the slider of characters in the character menu, it will show the name and description of the character when the user clicks on the character icon
let charIndex = 1; // means 1st character yung una nya papakita
let char_iconpreview = 3; //number of icons sa gilid
show_character(charIndex);

//function na ginagamit ng up and down arrow
function plus_character(n) {
    show_character(charIndex += n);
}

//function na naggogroup ng three icons, depende kapag ano yung click ng user
function next_group(direction) {
    show_character(charIndex += direction * char_iconpreview);
}

function current_char(n){
    show_character(charIndex=n);
}


//function na literal na pinagcoconnect na natin yung icon ng character sa name, story, and full image nya
function show_character(n) {
    let i;
    let slides = document.getElementsByClassName("char_slide"); //kinukuha yung container na mayrong description ng character
    let icons = document.getElementsByClassName("char_icon"); //kukunin kung kaninong icon nung character ang naka-select
    if(n>slides.length){charIndex = 1} //eto if daw lumagpas ung (n) sa kung ilan ang maximum characters natin, babalik sya sa first character and vice versa
    if(n<1){charIndex = slides.length}// eto ung vice versa, pag nagprevious ka habang nasa first character ka, mapupunta ka sa last character INFINITE LOOP

    //hides the slide
    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    //display current slide
    slides[charIndex-1].style.display = "block";

    //reset
    for (i = 0; i < icons.length; i++) {
    icons[i].classList.remove("active");
  }
    icons[1].classList.add("active");

    let visible_icons = 3;
    let start = charIndex - 2;

    if (start < 0) start = 0;
    let end = start + visible_icons;

    if (end > icons.length) {
        end = icons.length;
        start = end - visible_icons;
    }

    for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = "none";
    }

    for (let i = start; i < end; i++) {
        icons[i].style.display = "block";
    }

}