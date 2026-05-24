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

// BGM PLAYER
const bgmPlayer = document.getElementById('bgm');


let currentScene = '';
let sceneHistory = [];
let typing = false;
let fullText = '';
let displayedChars = 0;
let typingTimer = null;
let canAdvance = false;
let currentBGM = '';
let isMuted = false;

// LOAD SCENE

function loadScene(id, addToHistory = true) {

    const s = scenes[id];
    if (!s) return;

    if (addToHistory && currentScene) {
        sceneHistory.push(currentScene);
    }

    // BACK BUTTON VISIBILITY
    const backBtn = document.getElementById('back-btn');
    if (sceneHistory.length === 0) {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'block';
    }

    currentScene = id;

    // BACKGROUND
    backgroundLocal.style.background = s.bg;
    backgroundLocal.style.backgroundSize = 'cover';
    backgroundLocal.style.backgroundPosition = 'center';

    // LOCATION
    locationTag.textContent = s.location;

    // CHARACTERS
    charLayer.innerHTML = '';
    if (s.chars) {
        s.chars.forEach(c => {
            const div = document.createElement('div');
            div.className = 'character ' + (c.position || 'left') + (c.active ? ' active' : ' inactive');
            div.innerHTML = `<img src="${c.img}" alt="${c.name}" class="char-img">`;
            charLayer.appendChild(div);
        });
    }

    // SPEAKER
    speakerEl.textContent = s.speaker || '';

    // RESET CHOICES AND HINT
    choicesEl.style.display = 'none';
    choicesEl.innerHTML = '';
    hintEl.style.display = 'block';
    canAdvance = false;

    // BGM
    if (s.stopBgm) {
        stopBGM();
    } else if (s.bgm) {
        playBGM(s.bgm);
    }

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

// TYPEWRITER EFFECT

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

            // IF END SCENE GO BACK TO CHAPTER SCREEN AFTER 2 SECONDS
            if (isEnd) {
                hintEl.style.display = 'none';
                setTimeout(() => goToChapterScreen(), 2000);
            }
        }
    }

    tick();
}

// SHOW CHOICES

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

// BGM CONTROLS

function playBGM(src) {
    if (!src) return;
    if (src === currentBGM) return;

    currentBGM = src;
    bgmPlayer.src = src;
    bgmPlayer.volume = 0.5;
    bgmPlayer.play().catch(e => console.log('BGM autoplay blocked:', e));
}

function stopBGM() {
    bgmPlayer.pause();
    bgmPlayer.src = '';
    currentBGM = '';
}

function toggleMute() {
    isMuted = !isMuted;
    bgmPlayer.muted = isMuted;
    document.getElementById('mute-btn').textContent = isMuted ? '🔇' : '🔊';
}

// NAVIGATION

function goBack() {
    if (sceneHistory.length === 0) return;
    const previousScene = sceneHistory.pop();
    currentScene = previousScene;
    loadScene(previousScene, false);
}

function PlayGame(startScene) {
    sceneHistory = [];
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
    if (e.target.id === 'mute-btn') return;
    if (e.target.id === 'menu-btn') return;

    const s = scenes[currentScene];
    if (!s || s.isChoice || s.isEnd) return;

    // IF STILL TYPING SKIP TO END
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