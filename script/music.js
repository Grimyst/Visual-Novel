// Holds the song and the background/character that's associated with the song
const tracks = [
    {
        title: "Main Story Song 1",
        role: 'BGM',
        duration: 250,
        ref: 'aruarian dance',
        url: 'https://www.youtube.com/watch?v=qYcoJpqCha4',
        bg: 'url(Assets/Background/v-de-leon-hehe.jpg)',
        characImg: 'Assets/CharacterIcons/icon2.jpg',
        audio: 'Assets/Songs/aruarian dance.mp3'
    },
    {
        title: "Main Story Song 2",
        role: 'BGM',
        duration: 226,
        ref: 'Path of the Wind by Joe Hisaishi',
        url: 'https://www.youtube.com/watch?v=MZgBjQFMPvk',
        bg: 'url(Assets/Background/stars.png)',
        characImg: 'Assets/CharacterIcons/icon1.jpg',
        audio: 'Assets/Songs/_Path of The Wind_ by Joe Hisaishi.mp3'
    },
    {
        title: "Bad Ending Song 1",
        role: 'BGM',
        duration: 104,
        ref: 'Promise (Reprise) by Akira Yamaoka',
        url: 'https://www.youtube.com/watch?v=ZwLvcaDMhU8',
        bg: 'url(Assets/Background/stars.png)',
        characImg: 'Assets/CharacterIcons/icon1.jpg',
        audio: 'Assets/Songs/Promise Reprise.mp3'
    },
    {
        title: "Bad Ending Song 2",
        role: 'BGM',
        duration: 109,
        ref: 'Decretum by Yuki Kajiura',
        url: 'https://www.youtube.com/watch?v=XeMVu1OYYps',
        bg: 'url(Assets/Background/stars.png)',
        characImg: 'Assets/CharacterIcons/icon1.jpg',
        audio: 'Assets/Songs/Decretum.mp3'
    },
];

// Bar Sizes
const slots = [
    { h: 52, w: 0.66 }, // Top bar, short and narrow
    { h: 70, w: 0.80 }, // Above center bar, medium
    { h: 100, w: 1.00}, // Center (active bar), tallest and widest
    { h: 70, w: 0.80 }, // Below center bar, medium
    { h: 52, w: 0.66 }, // Bottom bar, short and narrow
];

// Calculation for how tall the visible window needs to be
const barGap = 14; // Gap between bars
const totalBars = tracks.length; // Total number of bars based on the tracks

const slotTops = [];
let runningTop = 0;
for (let i = 0; i < slots.length; i++) {
    slotTops.push(runningTop);
    runningTop += slots[i].h + barGap;
}

// Total height = Last slot's top + last slot's height
const windowHeight = slotTops[slots.length - 1] + slots[slots.length - 1].h;

//Tracks what's happening
let current = 0; // index of the current selected song
let locked = false; // prevents rapid navigation during animation
let playing = false;
let progress = 0; //playback progress. Start = 0, end = 1
let timerRef = null; // reference to the timer interval

//Elements
const trackElement = document.getElementById('track');
const stackClip = document.getElementById('trackStack');
const arrowUp = document.getElementById('arrowUp');
const arrowDown = document.getElementById('arrowDown');
const counterElement = document.getElementById('counter');
const dotsElement = document.getElementById('dots');
const playBtn = document.getElementById('playBtn');
const progFill = document.getElementById('progFill');
const progDot = document.getElementById('progDot');
const timeDisp = document.getElementById('timeDisp');
var volumeBtn = document.getElementById('volumeBtn');
var volumeSlider = document.getElementById('volumeSlider');
const artWorkElement = document.getElementById('artBgs');
const charsElement = document.getElementById('characterLayer');

// usable width for the bar stacks
const containerWidth = () => Math.min(window.innerWidth * 0.50, 680);

const bgElements = [] // holds the bacground
const charElements = [] // holds the character

tracks.forEach(function(track, index) {

    //responsible for background transition
    const bgDiv = document.createElement('div');
    bgDiv.className = 'artWorkBgs ' + (index === 0 ? 'visible' : 'hidden');
    bgDiv.style.backgroundImage = track.bg;
    bgDiv.style.backgroundSize = 'cover';
    bgDiv.style.backgroundPosition = 'center top';
    artWorkElement.appendChild(bgDiv);
    bgElements.push(bgDiv);

    //responsible for character transition
    const charDiv = document.createElement('div');
    charDiv.className = 'characterLayers ' + (index === 0 ? 'visible' : 'hidden');
    charDiv.innerHTML = `<img src = "${track.characImg}" class = "charImg" alt = "characters">`;
    charsElement.appendChild(charDiv);
    charElements.push(charDiv);
});

// Song bar panels
const panels = tracks.map(function(track, index) {
    const barDiv = document.createElement('div');
    barDiv.className = 'panel ' + (index === 0 ? 'is-active' : '');

    barDiv.innerHTML = `
        <div class = "panelInner">
            <span class = "panelSinger">${track.role}</span>
            <a class = "panelTitle" href = "${track.url}" target = "_blank" rel = "noopener noreferrer"
                title = "Reference: ${track.ref}">
                ${track.title}
            <span class = "panelRefTooltip">${track.ref}</span>
            </a>
        </div>`;
    
    // To navigate to the pressed bar
    barDiv.addEventListener('click', function() {
        navigate(index - current);
    });

    trackElement.appendChild(barDiv);
    return barDiv;
});

// Navigation dots per song
const dots = tracks.map(function(_, index) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.addEventListener('click', function() {
        navigate(index - current);
    });
    dotsElement.appendChild(dot);
    return dot;
});

// Updates the size, position and colors of the selected song change
function render(){
    const cw = containerWidth();

    // Size of container to match the visible window
    stackClip.style.width = cw + 'px';
    stackClip.style.height = windowHeight + 'px';

    // update size and opacity
    panels.forEach(function(bar, index) {
        const slot = index - current + 2;

        if (slot < 0 || slot >= slots.length) {
            //collapse the bar if it's offscreen
            const edgeslot = slot < 0 ? slots[0] : slots[slots.length - 1];
            bar.style.height = edgeslot.h + 'px';
            bar.style.width = '0px';
            bar.style.opacity = '0';
            bar.style.pointerEvents = 'none';
        } else {
            //sizing the bar base on its slot
            const slotInfo = slots[slot];
            const barWidth = Math.round(cw * slotInfo.w);
            const distFromcenter = Math.abs(slot - 2);

            bar.style.height = slotInfo.h + 'px';
            bar.style.width = barWidth + 'px';

            bar.style.opacity = distFromcenter === 0 ? '1' : (distFromcenter === 1 ? '0.88' : '0.65');
            bar.style.pointerEvents = 'auto';

            bar.classList.toggle('is-active', index === current);
        }
    });
    
    // for scrolling
    let cumulativeY = 0;
    const panelTops = [];
    panels.forEach(function(bar, index) {
        panelTops[index] = cumulativeY;
        const slot = index - current + 2;
        const h = slot < 0 
            ? slots[0].h
            : (slot >= slots.length 
                ? slots[slots.length - 1].h
                : slots[slot].h);
        cumulativeY += h + barGap;
    });

    // for lining up the current track in the center
    trackElement.style.transform = `translateY(${slotTops[2] - panelTops[current]}px)`;

    // for swapping background and character
    bgElements.forEach(function(bg, i) {
        bg.classList.toggle('visible', i === current);
        bg.classList.toggle('hidden', i !== current);
    });
    charElements.forEach((char, i) => {
        char.classList.toggle('visible', i === current);
        char.classList.toggle('hidden', i !== current);
    });

    // for arrows, disable if at the beginning or end of the list
    arrowUp.classList.toggle('disabled', current === 0);
    arrowDown.classList.toggle('disabled', current === totalBars - 1);

    // update the duration display
    const curr = String(current + 1 ).padStart(2, '0');
    const tot = String(totalBars).padStart(2, '0');
    counterElement.textContent = curr + ' / ' + tot;

    // update the dots
    dots.forEach(function(dot, i) {
        const distance = Math.abs(i - current);
        dot.classList.toggle('active', distance === 0);
        dot.classList.toggle('near', distance >= 1 && distance <= 2);
    });

    //Reset the player for the new song
    resetPlayer();
}

// Navigation for songs
function navigate(delta) {
    if (locked || delta === 0) return;

    // to not go above or below the last index
    const next = Math.max(0, Math.min(totalBars - 1, current + delta));
    if (next === current) return;
        
    locked = true;
    current = next;
    render();

    // Auto plays Music
    audioPlayer.addEventListener('canplaythrough', function() {
        audioPlayer.play();
        playing = true;
        playBtn.classList.add('playing');
    }, { once: true });

    // unlock after animation
    setTimeout(function() { locked = false; }, 500);
}


function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}


//Audio
const audioPlayer = new Audio();
    
// reset when the song ends
audioPlayer.addEventListener('ended', function() {
    playing = false;
    playBtn.classList.remove('playing'); 
});

// update the song progress bar
audioPlayer.addEventListener("timeupdate", function() {
    if (audioPlayer.duration) {
        progress = audioPlayer.currentTime / audioPlayer.duration;
        updatePlayerUI();
        }
});

//update the duration based on the mp3 file 
function updatePlayerUI() {
    const percent = progress * 100;
    progFill.style.width = percent + '%';
    progDot.style.left = percent + '%';

    const elapsed = audioPlayer.currentTime || Math.round(progress * tracks[current].duration);
    timeDisp.textContent = formatTime(elapsed);
}

//reset audio
function resetPlayer() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playing = false;
    progress = 0;
    playBtn.classList.remove('playing');
    updatePlayerUI();

    loadTrackAudio();
}

//load the correct audio file 
function loadTrackAudio() {
    audioPlayer.src = tracks[current].audio;
    audioPlayer.load();
}

// play / pause when the button is clicked
function togglePlay() {
    playing = !playing;
    playBtn.classList.toggle('playing', playing);

    if (playing) {
        audioPlayer.play();
    }
    else {
        audioPlayer.pause();
    }
}

// chnages volume when sliding
volumeSlider.addEventListener('input', function() {
    audioPlayer.volume = volumeSlider.value;

    if (volumeSlider.value == 0) {
        volumeBtn.textContent = '🔇';
    } else {
        volumeBtn.textContent = '🔊'
    }
});

// mute and unmute visual
volumeBtn.addEventListener('click', function() {
    if (audioPlayer.muted == false) {
        audioPlayer.muted = true;
        volumeBtn.textContent = '🔇';
    } else {
        audioPlayer.muted = false;
        volumeBtn.textContent = '🔊'
    }
});

//clicking the progress bar
document.getElementById('progTrack').addEventListener('click', function(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const fraction = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));

    if (audioPlayer.duration) {
        audioPlayer.currentTime= fraction * audioPlayer.duration;
    }
    progress = fraction;
    updatePlayerUI();
});

playBtn.addEventListener('click', togglePlay);

// inputs
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'PageUp') { event.preventDefault(); navigate(-1); }
    if (event.key === 'ArrowDown' ||event.key === 'PageDown') { event.preventDefault(); navigate(1); }
    if (event.key === ' ') { event.preventDefault(); togglePlay(); }
});

// mouse scroll
document.addEventListener('wheel', function(event) {
    event.preventDefault();
    navigate(event.deltaY > 0 ? 1 : -1); // scroll down = next, up = previous
}, {passive: false });


trackElement.style.transition = 'none';
panels.forEach(function(p) { p.style.transition = 'none'; });

render();

requestAnimationFrame(function() {
    requestAnimationFrame(function() {
        trackElement.style.transition = ' ';
        panels.forEach(function(p) { p.style.transition = ' '; });
    });
});