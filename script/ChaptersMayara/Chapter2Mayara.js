const chapter2 = {

    chapter2_start: {
        bg: 'url("") center/cover no-repeat',
        location: '',
        bgm: null,
        stopBgm: true,
        chars: [],
        speaker: 'System',
        isChoice: true,
        text: "Choose Path From Chapter 1",
        choices: [
            { text: 'You choose to Stand beside Mayari', next: 'EclipseDreams_start' },
            { text: 'You Asked Bakunawa what they want', next: 'LunarEclipse_start' }
        ]
    },


    EclipseDreams_start: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [],
        speaker: 'Narrator',
        text: "The rooftop overlooked the glowing city below while cold wind swept between the buildings.",
        next: 'EclipseDreams_1'
    },

    EclipseDreams_1: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari sat quietly on the ledge with her camera resting beside her.",
        next: 'EclipseDreams_2'
    },

    EclipseDreams_2: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Happy.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "You really like being alone up here, huh?",
        next: 'EclipseDreams_3'
    },

    EclipseDreams_3: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Happy.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "It's quieter.",
        next: 'EclipseDreams_4'
    },

    EclipseDreams_4: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "You don't like crowds?",
        next: 'EclipseDreams_5'
    },

    EclipseDreams_5: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "I think crowds make people lonelier sometimes.",
        next: 'EclipseDreams_6'
    },

    EclipseDreams_6: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala sits beside her.",
        next: 'EclipseDreams_7'
    },

    EclipseDreams_7: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "You know, you don't have to keep everything to yourself.",
        next: 'EclipseDreams_8'
    },

    EclipseDreams_8: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari remains silent for a moment.",
        next: 'EclipseDreams_9'
    },

    EclipseDreams_9: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "…Why are you being so kind to me?",
        next: 'EclipseDreams_10'
    },

    EclipseDreams_10: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "Because you look like you've been carrying something alone for a very long time.",
        next: 'EclipseDreams_11'
    },

    EclipseDreams_11: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "The moonlight reflects softly in her eyes.",
        next: 'EclipseDreams_12'
    },

    EclipseDreams_12: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "I don't think I'm fully human.",
        next: 'EclipseDreams_13'
    },

    EclipseDreams_13: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "What do you mean?",
        next: 'EclipseDreams_14'
    },

    EclipseDreams_14: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "I think I came from the moon.",
        next: 'EclipseDreams_choice'
    },


    // ─── CHOICE 2A ───────────────────────────────────────────

    EclipseDreams_choice: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        isChoice: true,
        text: "How do you respond?",
        choices: [
            { text: '"Then I\'ll protect you."', next: 'EclipseDreams_A1' },
            { text: '"You should stay away from everyone."', next: 'EclipseDreams_B1' }
        ]
    },


    // ─── CHOICE A — Then I'll protect you ───────────────────

    EclipseDreams_A1: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala immediately answers without hesitation.",
        next: 'EclipseDreams_A2'
    },

    EclipseDreams_A2: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "Then I'll protect you.",
        next: 'EclipseDreams_A3'
    },

    EclipseDreams_A3: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: true }
        ],
        speaker: 'Narrator',
        text: "Mayari stares at him in shock.",
        next: 'EclipseDreams_A4'
    },

    EclipseDreams_A4: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "You don't even know what I am.",
        next: 'EclipseDreams_A5'
    },

    EclipseDreams_A5: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Happy_Mouth.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "I don't care.",
        next: 'EclipseDreams_A6'
    },

    EclipseDreams_A6: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Happy.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "For the first time, Mayari smiles genuinely.",
        next: 'EclipseDreams_A7'
    },

    EclipseDreams_A7: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Happy.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "The moon above shines brighter.",
        next: 'end_chapter2A'
    },


    end_chapter2A: {
        bg: 'black',
        location: '',
        chars: [],
        speaker: 'Narrator',
        text: "Chapter 3A — The Sea Below the City",
        next: 'SeaBelow_start' // DIRECT TO CAHPTER 3A
    },

    // ─── CHOICE B — Stay away from everyone ─────────────────

  EclipseDreams_B1: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala slowly stands.",
        next: 'EclipseDreams_B2'
    },

    EclipseDreams_B2: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "If what you're saying is true… then maybe you should stay away from people.",
        next: 'EclipseDreams_B3'
    },

    EclipseDreams_B3: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari's expression quietly falls.",
        next: 'EclipseDreams_B4'
    },

    EclipseDreams_B4: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "…I knew you'd say that eventually.",
        next: 'EclipseDreams_B5'
    },

    EclipseDreams_B5: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "The rooftop suddenly feels colder.",
        next: 'EclipseDreams_B6'
    },

    EclipseDreams_B6: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "The distance between them becomes painfully obvious.",
        next: 'end_chapter2B'
    },

    end_chapter2B: {
        bg: 'black',
        location: '',
        chars: [],
        speaker: 'Narrator',
        text: "To be continued in Chapter 3B...",
        next: 'SeaAbove_start'
    },

// CHAPTER 2B — ECLIPSE DREAMS

LunarEclipse_start: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "The rooftop air feels tense after Bakunawa's warning.",
    next: 'LunarEclipse_1'
},

LunarEclipse_1: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "So you're really hiding something from me.",
    next: 'LunarEclipse_2'
},

LunarEclipse_2: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari avoids eye contact.",
    next: 'LunarEclipse_3'
},

LunarEclipse_3: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "I didn't know how to explain it.",
    next: 'LunarEclipse_4'
},

LunarEclipse_4: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "Try.",
    next: 'LunarEclipse_5'
},

LunarEclipse_5: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "The wind grows stronger around them.",
    next: 'LunarEclipse_6'
},

LunarEclipse_6: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "I remember things that shouldn't exist.",
    next: 'LunarEclipse_7'
},

LunarEclipse_7: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "A silver kingdom above the clouds.",
    next: 'LunarEclipse_8'
},

LunarEclipse_8: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "A monster swallowing the moon.",
    next: 'LunarEclipse_9'
},

LunarEclipse_9: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "And every eclipse feels like I'm dying.",
    next: 'LunarEclipse_10'
},

LunarEclipse_10: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala watches her carefully.",
    next: 'LunarEclipse_11'
},

LunarEclipse_11: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
    location: 'Rooftop',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
        { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "I think I came from the moon.",
    next: 'LunarEclipse_choice'
},


// ─── CHOICE 2B ───────────────────────────────────────────

    LunarEclipse_choice: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        isChoice: true,
        text: "How do you respond?",
        choices: [
            { text: '"Whatever you are, you\'re still you."', next: 'LunarEclipse_A1' },
            { text: '"Maybe you shouldn\'t be around people."', next: 'LunarEclipse_B1' }
        ]
    },


    // ─── CHOICE A — Whatever you are ────────────────────────

    LunarEclipse_A1: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala steps closer.",
        next: 'LunarEclipse_A2'
    },

    LunarEclipse_A2: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Happy_Mouth.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "Whatever you are, you're still you.",
        next: 'LunarEclipse_A3'
    },

    LunarEclipse_A3: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Happy.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: true }
        ],
        speaker: 'Narrator',
        text: "Mayari looks stunned.",
        next: 'LunarEclipse_A4'
    },

    LunarEclipse_A4: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Happy.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "You really believe that?",
        next: 'LunarEclipse_A5'
    },

    LunarEclipse_A5: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Happy_Mouth.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "I want to.",
        next: 'LunarEclipse_A6'
    },

    LunarEclipse_A6: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Happy.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Her eyes begin tearing up silently.",
        next: 'end_chapter2B_A'
    },

    end_chapter2B_A: {
        bg: 'black',
        location: '',
        chars: [],
        speaker: 'Narrator',
        text: "To be continued in Chapter 3A...",
        next: 'SeaBelow_start'
    },


    // ─── CHOICE B — Stay away from people ───────────────────

    LunarEclipse_B1: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala backs away slowly.",
        next: 'LunarEclipse_B2'
    },

    LunarEclipse_B2: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left', active: true },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "If this is dangerous, maybe you shouldn't be around people.",
        next: 'LunarEclipse_B3'
    },

    LunarEclipse_B3: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "…Maybe you're right.",
        next: 'LunarEclipse_B4'
    },

    LunarEclipse_B4: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'Rooftop',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left', active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "The moonlight around her visibly weakens.",
        next: 'end_chapter2B_B'
    },

    end_chapter2B_B: {
        bg: 'black',
        location: '',
        chars: [],
        speaker: 'Narrator',
        text: "To be continued in Chapter 3B...",
        next: 'SeaAbove_start'
    },

}
