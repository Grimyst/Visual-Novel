// VN DIV
const vn = document.getElementById('vn');

// BACKGROUND DIV
const backgroundLocal = document.getElementById('scene-bg');

// LOCATION DIV
const locationTag = document.getElementById('location-tag');

// CHARACTER IMAGE AND POSITION DIV
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
let sceneHistory = [];
let typing = false;
let fullText = '';
let displayedChars = 0;
let typingTimer = null;
let canAdvance = false;

let storyProgress = {
    chapter1Complete: false
};

function loadProgress() {
    try {
        const saved = localStorage.getItem('libulanStoryProgress');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (typeof parsed.chapter1Complete === 'boolean') {
                storyProgress.chapter1Complete = parsed.chapter1Complete;
            }
        }
    } catch (e) {
        console.warn('Unable to load progress', e);
    }
    unlockChapterButtons();
}

function saveProgress() {
    try {
        localStorage.setItem('libulanStoryProgress', JSON.stringify(storyProgress));
    } catch (e) {
        console.warn('Unable to save progress', e);
    }
}

function unlockChapterButtons() {
    const btn2 = document.getElementById('btn-chapter2');
    const btn3 = document.getElementById('btn-chapter3');
    if (!btn2 || !btn3) return;
    if (storyProgress.chapter1Complete) {
        btn2.disabled = false;
        btn2.classList.remove('disabled');
        btn3.disabled = false;
        btn3.classList.remove('disabled');
    } else {
        btn2.disabled = true;
        btn2.classList.add('disabled');
        btn3.disabled = true;
        btn3.classList.add('disabled');
    }
}

function startChapter(chapter) {
    if ((chapter === 2 || chapter === 3) && !storyProgress.chapter1Complete) {
        alert('Finish Chapter 1 first to unlock Chapter 2 and Chapter 3.');
        return;
    }
    const scene = chapter === 0
        ? 'prologue_start'
        : chapter === 1
            ? 'scene_cafe_start'
            : chapter === 2
                ? 'scene_ch2a_start'
                : 'scene_ch3a_start';
    PlayGame(scene);
}

function markChapter1Complete() {
    if (!storyProgress.chapter1Complete) {
        storyProgress.chapter1Complete = true;
        saveProgress();
        unlockChapterButtons();
    }
}





function loadScene(id, addToHistory = true) {

    const s = scenes[id];

    if (!s) return;

    if (addToHistory && currentScene) {
        sceneHistory.push(currentScene);
    }

    if (s.stopBgm) {
        stopBGM();
    }
    
    else if (s.bgm) {
        playBGM(s.bgm);
    }

    const backBtn = document.getElementById('back-btn');
    if (sceneHistory.length === 0) {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'block';
    }

    currentScene = id;

    // BACKGROUND
    // Some scenes in the chapter files have bg: 'url("") ...' or even just 'black'.
    // If we blindly assign that, the background appears to “vanish”.
    // Keep the previous background when the incoming bg is empty/invalid.
    const incomingBg = (s.bg ?? '').toString().trim();
    const isEmptyBg = incomingBg === '' || /url\(\s*""\s*\)/i.test(incomingBg) || /url\(\s*''\s*\)/i.test(incomingBg);
    if (!isEmptyBg) {
        backgroundLocal.style.background = incomingBg;
        // Only set these when we actually have a background assignment.
        backgroundLocal.style.backgroundSize = 'cover';
        backgroundLocal.style.backgroundPosition = 'center';
    }


    // LOCATION
    locationTag.textContent = s.location;

    // CHARACTERS
    charLayer.innerHTML = '';
    if (s.chars) {
        s.chars.forEach(c => {
            const div = document.createElement('div');
            div.className = 'character ' + (c.position || 'left') + (c.active ? ' active' : ' inactive') + (c.emotion ? ' emotion-' + c.emotion : '');
            const imgSrc = c.img || '';
            div.innerHTML = `<img src="${imgSrc}" alt="${c.name}" class="char-img">`;
            charLayer.appendChild(div);
        });
    }

    // SPEAKER
    speakerEl.textContent = s.speaker || '';

    // RESET CHOICES
    choicesEl.style.display = 'none';
    choicesEl.innerHTML = '';
    hintEl.style.display = 'block';
    canAdvance = false;

    // IF CHOICE SCENE
    if (s.isChoice) {
        dialogueEl.innerHTML = s.text;
        hintEl.style.display = 'none';
        showChoices(s.choices);
        return;
    }

    // TYPE OUT TEXT
    typeText(s.text, s.isEnd);
}


function typeText(text, isEnd) {
    fullText = text;
    displayedChars = 0;
    dialogueEl.innerHTML = '';
    typing = true;
    canAdvance = false;

    function tick() {
        if (displayedChars < fullText.length) {
            displayedChars++;
            dialogueEl.innerHTML = fullText.slice(0, displayedChars).replace(/\n/g, '<br>') + '<span id="cursor"></span>';
            typingTimer = setTimeout(tick, displayedChars < 20 ? 40 : 28);
        } else {
            typing = false;
            canAdvance = true;
            dialogueEl.innerHTML = fullText.replace(/\n/g, '<br>');

            // IF END SCENE, GO BACK TO CHAPTER SCREEN AFTER 2 SECONDS
            if (isEnd) {
                hintEl.style.display = 'none';
                setTimeout(() => goToChapterScreen(), 2000);
            }
        }
    }

    tick();
}


function showChoices(choices) {
    choicesEl.style.display = 'flex';
    choicesEl.innerHTML = '';

    choices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = c.text;

        // Prevent the global VN click handler from accidentally advancing text.
        // (The handler already ignores choice-btn, but stopping propagation makes it deterministic.)
        btn.onclick = (ev) => {
            ev.stopPropagation();
            if (currentScene === 'scene_cafe_choice' && (c.next === 'scene_ch2a_start' || c.next === 'scene_ch2b_start')) {
                markChapter1Complete();
            }
            loadScene(c.next);
        };

        choicesEl.appendChild(btn);
    });
}



function goBack() {
    if (sceneHistory.length === 0) return;
    const previousScene = sceneHistory.pop();
    currentScene = previousScene;
    loadScene(previousScene, false);
}


function PlayGame(startScene) {
    sceneHistory = []; // reset history on new game
    document.getElementById('chapter-title').style.display = 'none';
    document.getElementById('vn').style.display = 'block';
    loadScene(startScene);
}


function goToChapterScreen() {
    stopBGM(); 
    document.getElementById('vn').style.display = 'none';
    document.getElementById('chapter-title').style.display = 'flex';
}


// CLICK TO ADVANCE
vn.addEventListener('click', (e) => {
    if (e.target.classList.contains('choice-btn')) return;
    if (e.target.classList.contains('start-btn')) return;
    if (e.target.id === 'back-btn') return;

    const s = scenes[currentScene];
    if (!s || s.isChoice || s.isEnd) return;

    // IF STILL TYPING, SKIP TO END
    if (typing) {
        clearTimeout(typingTimer);
        typing = false;
        canAdvance = true;
        dialogueEl.innerHTML = fullText.replace(/\n/g, '<br>');
        return;
    }

    // LOAD NEXT SCENE
    if (canAdvance && s.next) {
        loadScene(s.next);
    }
});


const bgmPlayer = document.getElementById('bgm');
let currentBGM = '';

function playBGM(src) {
    if (!src) return;          // no music on this scene
    if (src === currentBGM) return; // already playing, don't restart

    currentBGM = src;
    bgmPlayer.src = src;
    bgmPlayer.volume = 0.5;
    bgmPlayer.play().catch(e => console.log('BGM autoplay blocked:', e));
}

function stopBGM() {
    bgmPlayer.pause();
    bgmPlayer.src = '';
    currentScene = '';
    sceneHistory = [];
    typing = false;
    fullText = '';
    displayedChars = 0;
    typingTimer = null;
    canAdvance = false;
}