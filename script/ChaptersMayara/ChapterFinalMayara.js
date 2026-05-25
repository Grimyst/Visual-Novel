const chapter4 = {

// ═══════════════════════════════════════════════════════
// FINAL CHAPTER — THE ECLIPSE
// ═══════════════════════════════════════════════════════

    chapter4_start: {
        bg: 'url("black") center/cover no-repeat',
        location: '',
        bgm: null,
        stopBgm: true,
        chars: [],
        speaker: 'System',
        text: "Final Chapter - The Eclipse",
        next: 'Eclipse_start'
    },


    Eclipse_start: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
         bgm: 'Assets/Songs/SadST.mp3',
        chars: [],
        speaker: 'Narrator',
        text: "The sky turned crimson as the moon above the city slowly cracked apart.",
        next: 'Eclipse_1'
    },

    Eclipse_1: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [],
        speaker: 'Narrator',
        text: "Entire sections of the skyline lost power while darkness consumed the streets below. The ocean rose toward the heavens in enormous waves suspended unnaturally in the air, surrounding the city like walls beneath the eclipsed moon.",
        next: 'Eclipse_2'
    },

    Eclipse_2: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [],
        speaker: 'Narrator',
        text: "Sirens echoed faintly across distant streets before disappearing entirely beneath the sound of thunder.",
        next: 'Eclipse_3'
    },

    Eclipse_3: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: true }
        ],
        speaker: 'Narrator',
        text: "Mayari collapsed to her knees as silver light spilled from the fractures spreading across her body. Her breathing trembled painfully.",
        next: 'Eclipse_4'
    },

    Eclipse_4: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'center', active: true }
        ],
        speaker: 'Mayari',
        text: "It hurts…",
        next: 'Eclipse_5'
    },

    Eclipse_5: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',   active: false },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',       position: 'center', active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala immediately moved toward her.",
        next: 'Eclipse_6'
    },

    Eclipse_6: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',  img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',           position: 'center', active: false }
        ],
        speaker: 'Bathala',
        text: "Mayari—",
        next: 'Eclipse_7'
    },

    Eclipse_7: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "A wall of darkness violently erupted between them.",
        next: 'Eclipse_8'
    },

    Eclipse_8: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                               position: 'right',  active: true  }
        ],
        speaker: 'Narrator',
        text: "Bakunawa stood beneath the crimson heavens while endless shadows twisted around his body like smoke.",
        next: 'Eclipse_9'
    },

    Eclipse_9: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Behind him, the ocean split open. The massive serpent beneath the sea finally revealed itself completely.",
        next: 'Eclipse_10'
    },

    Eclipse_10: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Golden eyes the size of buildings stared down upon the city.",
        next: 'Eclipse_11'
    },

    Eclipse_11: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                             position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "This world was never meant to keep its light forever.",
        next: 'Eclipse_12'
    },

    Eclipse_12: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The serpent slowly coiled around the fractured moon overhead. The skyline trembled violently. Windows shattered across nearby buildings.",
        next: 'Eclipse_13'
    },

    Eclipse_13: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala stared upward in horror.",
        next: 'Eclipse_14'
    },

    Eclipse_14: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',         position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "What even are you…?",
        next: 'Eclipse_15'
    },

    Eclipse_15: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                             position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "The end of a cycle that should have ended long ago.",
        next: 'Eclipse_16'
    },

    Eclipse_16: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png',       position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari struggled to stand despite the silver cracks spreading further across her skin.",
        next: 'Eclipse_17'
    },

    Eclipse_17: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png',       position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "Bakunawa… stop…",
        next: 'Eclipse_18'
    },

    Eclipse_18: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                             position: 'right',  active: true  }
        ],
        speaker: 'Narrator',
        text: "Bakunawa finally looked toward her. For the first time — his expression softened.",
        next: 'Eclipse_19'
    },

    Eclipse_19: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                             position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "You're still suffering for them. After everything.",
        next: 'Eclipse_20'
    },

    Eclipse_20: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png',       position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "Because people deserve light.",
        next: 'Eclipse_21'
    },

    Eclipse_21: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                             position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "And what have they ever given you in return?",
        next: 'Eclipse_22'
    },

    Eclipse_22: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Silence. Cold wind swept across the rooftop.",
        next: 'Eclipse_23'
    },

    Eclipse_23: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',           position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                     position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "You talk like you're trying to save her.",
        next: 'Eclipse_24'
    },

    Eclipse_24: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                               position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "I am.",
        next: 'Eclipse_25'
    },

    Eclipse_25: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The moon cracked again. A deafening sound echoed across the heavens.",
        next: 'Eclipse_26'
    },

    Eclipse_26: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Suddenly — the world froze.",
        next: 'Eclipse_27'
    },

    Eclipse_27: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The crashing waves stopped moving. The rain became suspended in midair. Even the falling debris around the rooftop remained motionless.",
        next: 'Eclipse_28'
    },

    Eclipse_28: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left', active: true }
        ],
        speaker: 'Bathala',
        text: "…What the hell?",
        next: 'Eclipse_29'
    },

    Eclipse_29: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false }
        ],
        speaker: 'Narrator',
        text: "A glowing system window slowly appeared before him. Silver light reflected across his face.",
        next: 'Eclipse_30'
    },

    Eclipse_30: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false }
        ],
        speaker: 'System',
        text: "FINAL DECISION PROTOCOL ACTIVATED",
        next: 'Eclipse_31'
    },

    Eclipse_31: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false }
        ],
        speaker: 'System',
        text: "Outcome will determine ending authority.",
        next: 'Eclipse_32'
    },

    Eclipse_32: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false }
        ],
        speaker: 'Narrator',
        text: "The screen flickered violently. Fragments of unreadable code glitched across the air.",
        next: 'Eclipse_33'
    },

    Eclipse_33: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false }
        ],
        speaker: 'System',
        text: "Final control granted.",
        next: 'Eclipse_34'
    },

    Eclipse_34: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Time slowly began moving again. The eclipse trembled overhead.",
        next: 'Eclipse_35'
    },

    Eclipse_35: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png',     position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari weakly reached toward Bathala.",
        next: 'Eclipse_36'
    },

    Eclipse_36: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png',     position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "…I'm scared.",
        next: 'Eclipse_37'
    },

    Eclipse_37: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala froze.",
        next: 'Eclipse_38'
    },

    Eclipse_38: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "For once, her voice sounded small. Human. Not a goddess. Not a mystery. Just someone terrified of disappearing.",
        next: 'Eclipse_39'
    },

    Eclipse_39: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                               position: 'right',  active: true  }
        ],
        speaker: 'Narrator',
        text: "Bakunawa quietly closed his eyes.",
        next: 'Eclipse_40'
    },

    Eclipse_40: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                               position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "This is the final eclipse.",
        next: 'Eclipse_41'
    },

    Eclipse_41: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                               position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "After tonight, either the moon survives…",
        next: 'Eclipse_42'
    },

    Eclipse_42: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                               position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "Or the suffering ends with it.",
        next: 'Eclipse_43'
    },

    Eclipse_43: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png',     position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The silver fractures spreading across Mayari's body brightened painfully. She collapsed again.",
        next: 'Eclipse_44'
    },

    Eclipse_44: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png',     position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',         position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala immediately caught her before she hit the rooftop.",
        next: 'Eclipse_45'
    },

    Eclipse_45: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',         position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "Why does it hurt this much…?",
        next: 'Eclipse_46'
    },

    Eclipse_46: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',       position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                 position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala held her carefully while the city crumbled beneath the crimson sky.",
        next: 'Eclipse_47'
    },

    Eclipse_47: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',       position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                 position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "Because you keep trying to carry everything alone.",
        next: 'Eclipse_48'
    },

    Eclipse_48: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',     position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari stared at him silently.",
        next: 'Eclipse_49'
    },

    Eclipse_49: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',     position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The system window suddenly glitched again.",
        next: 'Eclipse_choice'
    },
    
    Eclipse_choice: {
     bg: 'black',
        location: 'The Eclipse',
        bgm: null,
        stopBgm: true,
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true }
        ],
        speaker: 'System',
        isChoice: true,
        text: "FINAL DECISION PROTOCOL ACTIVATED",
        choices: [
            { text: 'Accept the default ending', next: 'Eclipse_DefaultEnding_1' },
            { text: 'Choose the ending yourself', next: 'Eclipse_PlayerChoice_1' }
        ]
    },


    // ─── DEFAULT ENDING — WHEN THE MOON DISAPPEARED ──────────

    Eclipse_DefaultEnding_1: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        bgm: 'Assets/Songs/BadEndingDefaultST.mp3',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false }
        ],
        speaker: 'System',
        text: "Default ending selected.",
        next: 'Eclipse_DefaultEnding_2'
    },

    Eclipse_DefaultEnding_2: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false }
        ],
        speaker: 'Narrator',
        text: "The system screen turns blood red.",
        next: 'Eclipse_DefaultEnding_3'
    },

    Eclipse_DefaultEnding_3: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Darkness immediately floods the rooftop.",
        next: 'Eclipse_DefaultEnding_4'
    },

    Eclipse_DefaultEnding_4: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala struggles to move as shadows wrap tightly around his arms and legs.",
        next: 'Eclipse_DefaultEnding_5'
    },

    Eclipse_DefaultEnding_5: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',         position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "No— wait!",
        next: 'Eclipse_DefaultEnding_6'
    },

    Eclipse_DefaultEnding_6: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                             position: 'right',  active: true  }
        ],
        speaker: 'Narrator',
        text: "Bakunawa slowly raises his hand toward the eclipsed moon.",
        next: 'Eclipse_DefaultEnding_7'
    },

    Eclipse_DefaultEnding_7: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                             position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "You were too late.",
        next: 'Eclipse_DefaultEnding_8'
    },

    Eclipse_DefaultEnding_8: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The serpent around the heavens tightens further. The moon begins shattering completely.",
        next: 'Eclipse_DefaultEnding_9'
    },

    Eclipse_DefaultEnding_9: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png',       position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari weakly reaches toward Bathala as her body starts fading into silver particles.",
        next: 'Eclipse_DefaultEnding_10'
    },

    Eclipse_DefaultEnding_10: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png',       position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "...I didn't want to disappear alone.",
        next: 'Eclipse_DefaultEnding_11'
    },

    Eclipse_DefaultEnding_11: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala desperately tries forcing himself forward. The rooftop beneath him cracks apart.",
        next: 'Eclipse_DefaultEnding_12'
    },

    Eclipse_DefaultEnding_12: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',         position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "Mayari!",
        next: 'Eclipse_DefaultEnding_13'
    },

    Eclipse_DefaultEnding_13: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "But the shadows pin him in place.",
        next: 'Eclipse_DefaultEnding_14'
    },

    Eclipse_DefaultEnding_14: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left', active: false }
        ],
        speaker: 'Narrator',
        text: "The final fragment of moonlight disappears from the sky. The ocean becomes still. The rain stops falling.",
        next: 'Eclipse_DefaultEnding_15'
    },

    Eclipse_DefaultEnding_15: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left', active: false }
        ],
        speaker: 'Narrator',
        text: "Every light across Manila dies instantly.",
        next: 'Eclipse_DefaultEnding_16'
    },

    Eclipse_DefaultEnding_16: {
         bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left', active: false }
        ],
        speaker: 'Narrator',
        text: "Silence consumes the world.",
        next: 'Eclipse_DefaultEnding_17'
    },

    Eclipse_DefaultEnding_17: {
        bg: 'black',
        location: '',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'center', active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala stands alone beneath endless darkness.",
        next: 'Eclipse_DefaultEnding_18'
    },

    Eclipse_DefaultEnding_18: {
        bg: 'url("Assets/EndingBackground/defaultEnd.png") center/cover no-repeat',
        location: '',
        chars: [],
        speaker: 'System',
        text: "Ending Activated: WHEN THE MOON DISAPPEARED",
        redirect: 'endingsPage.html',
        isEnd: true
    },



    // ─── CHOICE B — MANUAL ENDING SELECTION ─────────────────

Eclipse_PlayerChoice_1: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    bgm: null,
    stopBgm: true,
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "The system screen suddenly glitches violently.",
    next: 'Eclipse_PlayerChoice_2'
},

Eclipse_PlayerChoice_2: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
    ],
    speaker: 'System',
    text: "WARNING — UNAUTHORIZED ENDING OVERRIDE DETECTED",
    next: 'Eclipse_PlayerChoice_3'
},

Eclipse_PlayerChoice_3: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Silver fractures spread across the frozen air itself.",
    next: 'Eclipse_PlayerChoice_4'
},

Eclipse_PlayerChoice_4: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                               position: 'right',  active: true  }
    ],
    speaker: 'Narrator',
    text: "Bakunawa slowly looks toward Bathala.",
    next: 'Eclipse_PlayerChoice_5'
},

Eclipse_PlayerChoice_5: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                               position: 'right',  active: true  }
    ],
    speaker: 'Bakunawa',
    text: "…You would defy fate itself for her?",
    next: 'Eclipse_PlayerChoice_6'
},

Eclipse_PlayerChoice_6: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala slowly stands despite the shadows tearing around him.",
    next: 'Eclipse_PlayerChoice_7'
},

Eclipse_PlayerChoice_7: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left',   active: true  },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',           position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                     position: 'right',  active: false }
    ],
    speaker: 'Bathala',
    text: "If fate decided this ending…",
    next: 'Eclipse_PlayerChoice_8'
},

Eclipse_PlayerChoice_8: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left',   active: true  },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',           position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                     position: 'right',  active: false }
    ],
    speaker: 'Bathala',
    text: "Then maybe fate was wrong.",
    next: 'Eclipse_PlayerChoice_9'
},

Eclipse_PlayerChoice_9: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png',   position: 'center', active: true  },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                 position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari stares at him in shock.",
    next: 'Eclipse_PlayerChoice_10'
},

Eclipse_PlayerChoice_10: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
    ],
    speaker: 'System',
    text: "Manual ending selection authorized.",
    next: 'Eclipse_PlayerChoice_11'
},

Eclipse_PlayerChoice_11: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "A second glowing window appears.",
    next: 'Eclipse_choice2'
},

// ─── SECOND CHOICE ───────────────────────────────────────

Eclipse_choice2: {
   bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
    location: 'The Eclipse',
    bgm: null,
    stopBgm: true,
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: true  },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
    ],
    speaker: 'System',
    isChoice: true,
    text: "SELECT YOUR ENDING",
    choices: [
        { text: 'Reach for Mayari', next: 'GoodEnding_1' },
        { text: 'Let Bakunawa consume the moon', next: 'BadEnding_1' }
    ]
},


    // ═══════════════════════════════════════════════════════
    // GOOD ENDING — THE LIGHT THAT REFUSES TO FADE
    // ═══════════════════════════════════════════════════════

    GoodEnding_1: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        bgm: 'Assets/Songs/GoodEndingST.mp3',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala forces himself forward through the collapsing shadows while the eclipse tears apart overhead.",
        next: 'GoodEnding_2'
    },

    GoodEnding_2: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png',     position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Silver cracks continue spreading across Mayari's body as moonlight flickers weakly around her.",
        next: 'GoodEnding_3'
    },

    GoodEnding_3: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png',     position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "Don't…",
        next: 'GoodEnding_4'
    },

    GoodEnding_4: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',           position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                     position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "What?",
        next: 'GoodEnding_5'
    },

    GoodEnding_5: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png',     position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "Don't stay because you pity me.",
        next: 'GoodEnding_6'
    },

    GoodEnding_6: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The rooftop trembles violently beneath them. The ocean below rises higher toward the crimson sky.",
        next: 'GoodEnding_7'
    },

    GoodEnding_7: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala slowly kneels beside her.",
        next: 'GoodEnding_8'
    },

    GoodEnding_8: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',       position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                 position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "I stayed because every time this world tried to make you feel alone…",
        next: 'GoodEnding_9'
    },

    GoodEnding_9: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',       position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                 position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "I hated it.",
        next: 'GoodEnding_10'
    },

    GoodEnding_10: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',     position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari stares at him silently.",
        next: 'GoodEnding_11'
    },

    GoodEnding_11: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                 position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "You keep carrying everyone else's darkness.",
        next: 'GoodEnding_12'
    },

    GoodEnding_12: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                 position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "You keep suffering quietly.",
        next: 'GoodEnding_13'
    },

    GoodEnding_13: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                 position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "And somehow you still choose to protect people.",
        next: 'GoodEnding_14'
    },

    GoodEnding_14: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',         position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari's voice shakes.",
        next: 'GoodEnding_15'
    },

    GoodEnding_15: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',         position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "I'm tired.",
        next: 'GoodEnding_16'
    },

    GoodEnding_16: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',         position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "Then let someone stay beside you this time.",
        next: 'GoodEnding_17'
    },

    GoodEnding_17: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                             position: 'right',  active: true  }
        ],
        speaker: 'Narrator',
        text: "Bakunawa's enormous serpent form twists violently around the broken moon.",
        next: 'GoodEnding_18'
    },

    GoodEnding_18: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                             position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "You think kindness can stop fate?!",
        next: 'GoodEnding_19'
    },

    GoodEnding_19: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala stands. Moonlight slowly gathers around him.",
        next: 'GoodEnding_20'
    },

    GoodEnding_20: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',         position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "No.",
        next: 'GoodEnding_21'
    },

    GoodEnding_21: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',         position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "But people can.",
        next: 'GoodEnding_22'
    },

    GoodEnding_22: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png',   position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari slowly reaches toward him. Their hands finally meet.",
        next: 'GoodEnding_23'
    },

    GoodEnding_23: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png',   position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The entire rooftop erupts in silver light. The eclipse begins cracking apart.",
        next: 'GoodEnding_24'
    },

    GoodEnding_24: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png',   position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                               position: 'right',  active: true  }
        ],
        speaker: 'Narrator',
        text: "Bakunawa screams as the ocean beneath the city explodes upward.",
        next: 'GoodEnding_25'
    },

    GoodEnding_25: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png',   position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The darkness surrounding Manila begins dissolving piece by piece. Lights slowly return across the skyline. Rain falls softly once more.",
        next: 'GoodEnding_26'
    },

    GoodEnding_26: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png',   position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari looks upward toward the restored moon with tears in her eyes.",
        next: 'GoodEnding_27'
    },

    GoodEnding_27: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png',       position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral_Mouth.png', position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "…It's beautiful.",
        next: 'GoodEnding_28'
    },

    GoodEnding_28: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "You should see it more often.",
        next: 'GoodEnding_29'
    },

    GoodEnding_29: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png) center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png',         position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral_Mouth.png', position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                     position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "You really say embarrassing things so confidently.",
        next: 'GoodEnding_30'
    },

    GoodEnding_30: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png',     position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "Too late to stop now.",
        next: 'GoodEnding_31'
    },

    GoodEnding_31: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter2A.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Happy.png',   position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png', position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The restored moon shines brighter than ever above the sleeping city. Far below, the city slowly comes back to life.",
        next: 'GoodEnding_end'
    },

    GoodEnding_end: {
        bg: 'url("Assets/EndingBackground/mayariGoodEnd.png") center/cover no-repeat',
        location: '',
        chars: [],
        speaker: 'System',
        text: "",
        next: 'GoodEnding_end1'
    },

    GoodEnding_end1: {
        bg: 'url("Assets/EndingBackground/mayariGoodEnd.png") center/cover no-repeat',
        location: '',
        chars: [],
        speaker: 'System',
        text: "Ending Unlocked: THE LIGHT THAT REFUSES TO FADE",
        redirect: 'endingsPage.html',
        isEnd: true
    },

    // ═══════════════════════════════════════════════════════
    // BAD ENDING — WHEN THE MOON DISAPPEARED
    // ═══════════════════════════════════════════════════════

    BadEnding_1: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala slowly lowers his hand.",
        next: 'BadEnding_2'
    },

    BadEnding_2: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The shadows around the rooftop stop resisting him. For the first time since the eclipse began — everything becomes quiet.",
        next: 'BadEnding_3'
    },

    BadEnding_3: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari watches him silently. No anger. No hatred. Only sadness.",
        next: 'BadEnding_4'
    },

    BadEnding_4: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',       position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                 position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "So this is your choice.",
        next: 'BadEnding_5'
    },

    BadEnding_5: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala closes his eyes briefly.",
        next: 'BadEnding_6'
    },

    BadEnding_6: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',       position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                 position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "…I don't know how to save you.",
        next: 'BadEnding_7'
    },

    BadEnding_7: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: true  }
        ],
        speaker: 'Narrator',
        text: "Bakunawa slowly approaches beneath the crimson eclipse.",
        next: 'BadEnding_8'
    },

    BadEnding_8: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "Because some things were never meant to be saved.",
        next: 'BadEnding_9'
    },

    BadEnding_9: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "The moon cracks louder overhead. Pieces of silver light begin falling into the ocean below.",
        next: 'BadEnding_10'
    },

    BadEnding_10: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',         position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari smiles weakly despite the tears in her eyes.",
        next: 'BadEnding_11'
    },

    BadEnding_11: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',         position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "I think…",
        next: 'BadEnding_12'
    },

    BadEnding_12: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',         position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "I was hoping you'd prove him wrong.",
        next: 'BadEnding_13'
    },

    BadEnding_13: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: true  },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala tries to speak — but no words come out.",
        next: 'BadEnding_14'
    },

    BadEnding_14: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Darkness slowly consumes the rooftop.",
        next: 'BadEnding_15'
    },

    BadEnding_15: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: true  }
        ],
        speaker: 'Narrator',
        text: "Bakunawa closes his eyes peacefully as the eclipse fully devours the moon.",
        next: 'BadEnding_16'
    },

    BadEnding_16: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                           position: 'right',  active: true  }
        ],
        speaker: 'Bakunawa',
        text: "At last.",
        next: 'BadEnding_17'
    },

    BadEnding_17: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',         position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Mayari's body slowly dissolves into silver particles drifting into the storm. Before disappearing completely, she looks toward Bathala one final time.",
        next: 'BadEnding_18'
    },

    BadEnding_18: {
       bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapterFinal.png") center/cover no-repeat',
        location: 'The Eclipse',
        chars: [
            { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',         position: 'left',   active: false },
            { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png',   position: 'center', active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/L_Bakunawa_Neutral.png',                                                   position: 'right',  active: false }
        ],
        speaker: 'Mayari',
        text: "…Thank you for finding me anyway.",
        next: 'BadEnding_19'
    },

    BadEnding_19: {
        bg: 'black',
        location: '',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'center', active: false }
        ],
        speaker: 'Narrator',
        text: "The moon vanishes completely from the sky. Every light across the city dies instantly. The ocean becomes still. The rain stops. The world falls silent.",
        next: 'BadEnding_20'
    },

    BadEnding_20: {
        bg: 'black',
        location: '',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'center', active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala stands alone beneath endless darkness.",
        next: 'BadEnding_end'
    },

    BadEnding_end: {
        bg: 'url("Assets/EndingBackground/sidapaBadEnd.png") center/cover no-repeat',
        location: '',
        chars: [],
        speaker: 'System',
        text: "",
        next: 'BadEnding_end1'
    },
    
    BadEnding_end1: {
        bg: 'url("Assets/EndingBackground/sidapaBadEnd.png") center/cover no-repeat',
        location: '',
        chars: [],
        speaker: 'System',
        text: "Ending Activated: WHEN THE MOON DISAPPEARED",
        redirect: 'endingsPage.html',
        isEnd: true
    }

}