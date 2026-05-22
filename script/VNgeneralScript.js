

// VN DIV
const vn = document.getElementById('vn');

// BACKGROUND DIV
const backgroundLocal = document.getElementById('scene-bg');

// LOCATION DIV
const locationTag = document.getElementById('location-tag');

// CHARACTER IMAGE AND POSTITON DIV
const charLayer = document.getElementById('character-layer');

// SPEAKER DIV
const speakerEl = document.getElementById('speaker-name');

// DIALOG DIV
const dialogueEl = document.getElementById('dialogue-text');

// CHOICES DIV
const choicesEl = document.getElementById('choices');

// HINT DIV
const hintEl = document.getElementById('advance-hint');



let currentScene = '';

// SCENE HISTORY
let sceneHistory = []; 

let typing = false;
let fullText = '';
let displayedChars = 0;
let typingTimer = null;
let canAdvance = false;
let addToHistory;

function loadScene(id, addToHistory = true) {

  const s = scenes[id];

  // if there are no scenes it exits 
  if (!s) {
    return;
  }

 if (addToHistory && currentScene) {
    sceneHistory.push(currentScene); // only saves if addToHistory is true
  }

  const backBtn = document.getElementById('back-btn');
    if (sceneHistory.length === 0) {
        backBtn.style.display = 'none'; // hide on first scene
    } else {
        backBtn.style.display = 'block';
    }

  
  currentScene = id;

  

  
  //Background images
  backgroundLocal.style.background = s.bg;
  backgroundLocal.style.backgroundSize = 'cover';
  backgroundLocal.style.backgroundPosition = 'center';

  locationTag.textContent = s.location;

    charLayer.innerHTML = '';
    if (s.chars) {
        s.chars.forEach(c => {
            const div = document.createElement('div');
            div.className = 'character ' + (c.position || 'left') + (c.active ? ' active' : ' inactive');
            div.innerHTML = `<img src="${c.img}" alt="${c.name}" class="char-img">`;
            charLayer.appendChild(div);
        });
    }

  speakerEl.textContent = s.speaker || '';
  choicesEl.style.display = 'none';
  choicesEl.innerHTML = '';
  hintEl.style.display = 'block';
  canAdvance = false;

  // CHOICE CHOOSER
  if (s.isChoice) {
    dialogueEl.innerHTML = s.text;
    hintEl.style.display = 'none';
    showChoices(s.choices);
    return;
  }

  typeText(s.text, s.isEnd);
}


function goBack() {
    if (sceneHistory.length === 0) return; // nothing to go back to

    const previousScene = sceneHistory.pop(); // remove and get last scene
    currentScene = previousScene;
    loadScene(previousScene, false); // but this will push to history again!
}



function typeText(text, isEnd) {
  fullText = text;
  displayedChars = 0;
  dialogueEl.innerHTML = '';
  typing = true;
  canAdvance = false;

  // SHOWING THE DIALOG TEXTS
  function tick() {
    if (displayedChars < fullText.length) {
      displayedChars++;
      dialogueEl.innerHTML = fullText.slice(0, displayedChars).replace(/\n/g, '<br>') + '<span id="cursor"></span>';
      typingTimer = setTimeout(tick, displayedChars < 20 ? 40 : 28);
    } else {
      typing = false;
      canAdvance = true;
      dialogueEl.innerHTML = fullText.replace(/\n/g, '<br>');
      if (isEnd) hintEl.style.display = 'none';
    }
  }

  tick();
}

function showChoices(choices) {
  choicesEl.style.display = 'flex';
  choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = c.text;
    btn.onclick = () => loadScene(c.next);
    choicesEl.appendChild(btn);
  });
}


// CLICKING LISTENER 
vn.addEventListener('click', (e) => {
  if (e.target.classList.contains('choice-btn')) return;
  if (e.target.classList.contains('start-btn')) return;

  const s = scenes[currentScene];
  if (!s || s.isChoice || s.isEnd) return;

  if (typing) {
    clearTimeout(typingTimer);
    typing = false;
    canAdvance = true;
    dialogueEl.innerHTML = fullText.replace(/\n/g, '<br>');
    return;
  }

  // LOADING NEXT SCENE
  if (canAdvance && s.next) {
    loadScene(s.next);
  }
});


// PLAYING THE GAME
function PlayGame(chapter) {
  document.getElementById('chapter-title').style.opacity = '0';
  setTimeout(() => { document.getElementById('chapter-title').style.display = 'none'; }, 1000);
  loadScene(chapter);
}

// Returning to title
function returnToTitle() {
    // hide end screen
    document.getElementById('end-screen').style.display = 'none';
    
    vn.innerHTML = `
     <!-- SCENE BG -->
        <div id="scene-bg"> </div>

        <!-- LOCATION DIV -->
        <div id="location-tag"></div>

        <!-- CHARACTER LAYER-->
        <div id="character-layer"></div>

        <!-- DIALOG BOX -->
        <div id="textbox">
            <div id="speaker-name"></div>
            <div id="dialogue-text"></div>
            <div id="choices"></div>
            <div id="advance-hint">click to continue</div>
        </div>
        
        <!-- CHAPTER TITLE -->
        <div id="chapter-title">
            <p>this shi is crinh my ahh cant believe i made this</p>
            <h1> The TITLE </h1>
            <p style="margin-top:6px; font-style:italic; font-family:'Playfair Display',serif; letter-spacing:1px; font-size:14px; color:rgba(200,210,240,0.6);">"Dustin and Kurt."</p>
            <button class="start-btn" onclick="PlayGame('Chapter1_start');">Chapter 1</button>
            <button class="start-btn" onclick="PlayGame()">Chapter 2</button>
        </div>
        <button id="back-btn" onclick="goBack()">← Back</button>
    
        <div id="end-buttons">
            <button onclick="returnToTitle()">Return to Title</button>
        </div>
      `

    // reset game state
    sceneHistory = [];
    currentScene = 'start';
    typing = false;
    canAdvance = false;

    // clear characters and dialogue
    charLayer.innerHTML = '';
    dialogueEl.innerHTML = '';
    speakerEl.textContent = '';

    // show title screen again
    const title = document.getElementById('chapter-title');
    title.style.display = 'flex';
    setTimeout(() => { title.style.opacity = '1'; }, 50);
}