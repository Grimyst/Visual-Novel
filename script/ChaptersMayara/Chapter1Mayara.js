
const prologue = {
chapter1_start: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    bgm: 'Assets/Songs/_Path of The Wind_ by Joe Hisaishi.mp3',
    chars: [],
    speaker: 'Narrator',
    text: "The photography darkroom smelled faintly of chemicals, dust, and wet paper while rows of freshly developed photographs swayed gently from hanging wires overhead. Most of the pictures showed the moon from impossible angles — full moons, crescent moons, eclipses, and skies empty except for pale silver light.",
    next: 'scene_darkroom_1'
},

scene_darkroom_1: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [],
    speaker: 'Narrator',
    text: "Rain tapped softly against the tiny windows near the ceiling.",
    next: 'scene_darkroom_2'
},

scene_darkroom_2: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "So this is where you disappear during lunch breaks.",
    next: 'scene_darkroom_3'
},

scene_darkroom_3: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "You make it sound suspicious.",
    next: 'scene_darkroom_4'
},

scene_darkroom_4: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "A hidden darkroom full of moon pictures is at least a little suspicious.",
    next: 'scene_darkroom_5'
},

scene_darkroom_5: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral_Mouth.png', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari laughed quietly under her breath while adjusting one of the hanging photographs.",
    next: 'scene_darkroom_6'
},

scene_darkroom_6: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "These are incredible.",
    next: 'scene_darkroom_7'
},

scene_darkroom_7: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral_Mouth.png', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "Most people think they're repetitive.",
    next: 'scene_darkroom_8'
},

scene_darkroom_8: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "They don't feel repetitive.",
    next: 'scene_darkroom_9'
},

scene_darkroom_9: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "They feel emotional. Lonely, even.",
    next: 'scene_darkroom_10'
},

scene_darkroom_10: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari paused for a moment before answering.",
    next: 'scene_darkroom_11'
},

scene_darkroom_11: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "Maybe that's because the moon always looks lonelier when people stop noticing it.",
    next: 'scene_darkroom_12'
},

scene_darkroom_12: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "A sudden gust of freezing wind swept through the room. The hanging photographs began swaying violently despite the windows being closed.",
    next: 'scene_darkroom_13'
},

scene_darkroom_13: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "The lights overhead flickered hard enough to plunge the room into darkness between flashes.",
    next: 'scene_darkroom_14'
},

scene_darkroom_14: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "Still talking like you belong to the sky?",
    next: 'scene_darkroom_15'
},

scene_darkroom_15: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala immediately turned toward the voice. A tall figure stood near the doorway, half-hidden in darkness. His eyes glowed faintly gold beneath the flickering lights.",
    next: 'scene_darkroom_16'
},

scene_darkroom_16: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Bathala',
    text: "Who are you?",
    next: 'scene_darkroom_17'
},

scene_darkroom_17: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "Someone who remembers her better than she remembers herself.",
    next: 'scene_darkroom_18'
},

scene_darkroom_18: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Angry.png', position: 'right', active: true },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari's expression suddenly hardened.",
    next: 'scene_darkroom_19'
},

scene_darkroom_19: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Angry_Mouth.png', position: 'right', active: true },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Mayari',
    text: "You shouldn't be here.",
    next: 'scene_darkroom_20'
},

scene_darkroom_20: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Angry.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "And yet you continue pretending this life can last.",
    next: 'scene_darkroom_21'
},

scene_darkroom_21: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "The room darkened again. For a brief second, something enormous moved behind him in the shadows — something serpentine. Something with glowing eyes.",
    next: 'scene_darkroom_choice'
},

// CHOICE SCENE
scene_darkroom_choice: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    bgm: null,
    stopBgm: true,
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Bathala',
    isChoice: true,
    text: "What do you do?",
    choices: [
        { text: 'Stand beside Mayari', next: 'scene_choiceA_1' },
        { text: 'Ask Bakunawa what they want', next: 'scene_choiceB_1' }
    ]
},

// ─── CHOICE A ───────────────────────────────────────────

scene_choiceA_1: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala immediately steps in front of Mayari as the lights continue flickering violently.",
    next: 'scene_choiceA_2'
},

scene_choiceA_2: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Bathala',
    text: "I don't know who you are, but back off.",
    next: 'scene_choiceA_3'
},

scene_choiceA_3: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left', active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "You would defend someone you barely understand?",
    next: 'scene_choiceA_4'
},

scene_choiceA_4: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Bathala',
    text: "Maybe because she's the only honest person here.",
    next: 'scene_choiceA_5'
},

scene_choiceA_5: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: true },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari looks surprised for a moment.",
    next: 'scene_choiceA_6'
},

scene_choiceA_6: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "The windows crack slightly as darkness spreads across the ceiling.",
    next: 'scene_choiceA_7'
},

scene_choiceA_7: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left', active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "Then you'll suffer beside her too.",
    next: 'scene_choiceA_8'
},

scene_choiceA_8: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "Bakunawa disappears into the shadows.",
    next: 'scene_choiceA_9'
},

scene_choiceA_9: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "…You shouldn't trust me that easily.",
    next: 'scene_choiceA_10'
},

scene_choiceA_10: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "Too late now.",
    next: 'end_chapter1A'
},

end_chapter1A: {
    bg: 'black',
    location: '',
    chars: [],
    speaker: 'Narrator',
    text: "Chapter 2A — Eclipse Dreams",
    next: 'EclipseDreams_start' // DIRECT to Chapter 2A
},

// ─── CHOICE B ───────────────────────────────────────────

scene_choiceB_1: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala cautiously steps forward.",
    next: 'scene_choiceB_2'
},

scene_choiceB_2: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Bathala',
    text: "What exactly do you want from her?",
    next: 'scene_choiceB_3'
},

scene_choiceB_3: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "You ask questions instead of blindly protecting her. Interesting.",
    next: 'scene_choiceB_4'
},

scene_choiceB_4: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Angry_Mouth.png', position: 'right', active: true },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Mayari',
    text: "Don't listen to him.",
    next: 'scene_choiceB_5'
},

scene_choiceB_5: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "Bakunawa walks beneath the hanging eclipse photographs.",
    next: 'scene_choiceB_6'
},

scene_choiceB_6: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "She hides the truth because she fears what happens once people learn what she really is.",
    next: 'scene_choiceB_7'
},

scene_choiceB_7: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Bathala',
    text: "What is she talking about?",
    next: 'scene_choiceB_8'
},

scene_choiceB_8: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "She belongs to the moon.",
    next: 'scene_choiceB_9'
},

scene_choiceB_9: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "And the moon is dying.",
    next: 'scene_choiceB_10'
},

scene_choiceB_10: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Angry_Mouth.png', position: 'right', active: true },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Mayari',
    text: "Stop.",
    next: 'scene_choiceB_11'
},

scene_choiceB_11: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "Bakunawa disappears into the darkness as the room falls silent.",
    next: 'scene_choiceB_12'
},

scene_choiceB_12: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala slowly looks back at Mayari.",
    next: 'scene_choiceB_13'
},

scene_choiceB_13: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter1.png") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "…What did he mean by that?",
    next: 'end_chapter1B'
},


end_chapter1B: {
    bg: 'black',
    location: '',
    chars: [],
    speaker: 'Narrator',
    text: "Chapter 2B — Eclipse Dreams ",
    next: 'LunarEclipse_start' // DIRECT to Chapter 2B
},
}