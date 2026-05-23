const chapter3 = {

     chapter3_start: {
        bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
        location: '',
        chars: [],
        speaker: 'System',
        isChoice: true,
        text: "Choose Path From Chapter 2",
        choices: [
            { text: 'You choose to protect Mayari', next: 'SeaBelow_start' },
            { text: 'You told Mayari to stay away from everyone.', next: 'SeaAbove_start' }
        ]
    },
 
 /* 
 CHAPTER 3A — THE SEA BELOW THE CITY
 */

 // ═══════════════════════════════════════════════════════
// CHAPTER 3A — THE SEA BELOW THE CITY
// ═══════════════════════════════════════════════════════

SeaBelow_start: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [],
    speaker: 'Narrator',
    text: "The ocean beneath Manila Bay slowly opens into darkness while the crimson moon hangs overhead.",
    next: 'SeaBelow_1'
},

SeaBelow_1: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left', active: true }
    ],
    speaker: 'Bathala',
    text: "What the hell…?",
    next: 'SeaBelow_2'
},

SeaBelow_2: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',  active: false },
        { name: 'Bakunawa', img: '',                                             position: 'right', active: true  }
    ],
    speaker: 'Bakunawa',
    text: "The truth.",
    next: 'SeaBelow_3'
},

SeaBelow_3: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',  active: false },
        { name: 'Bakunawa', img: '',                                             position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "Massive waves rise unnaturally into the sky.",
    next: 'SeaBelow_4'
},

SeaBelow_4: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',  active: false },
        { name: 'Bakunawa', img: '',                                             position: 'right', active: true  }
    ],
    speaker: 'Bakunawa',
    text: "Mayari continues suffering just to keep the cycle alive.",
    next: 'SeaBelow_5'
},

SeaBelow_5: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png', position: 'left',  active: true  },
        { name: 'Bakunawa', img: '',                                                   position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "What cycle?",
    next: 'SeaBelow_6'
},

SeaBelow_6: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',  active: false },
        { name: 'Bakunawa', img: '',                                             position: 'right', active: true  }
    ],
    speaker: 'Bakunawa',
    text: "Hope.",
    next: 'SeaBelow_7'
},

SeaBelow_7: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',  active: false },
        { name: 'Bakunawa', img: '',                                             position: 'right', active: true  }
    ],
    speaker: 'Bakunawa',
    text: "Loss.",
    next: 'SeaBelow_8'
},

SeaBelow_8: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',  active: false },
        { name: 'Bakunawa', img: '',                                             position: 'right', active: true  }
    ],
    speaker: 'Bakunawa',
    text: "Light.",
    next: 'SeaBelow_9'
},

SeaBelow_9: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',  active: false },
        { name: 'Bakunawa', img: '',                                             position: 'right', active: true  }
    ],
    speaker: 'Bakunawa',
    text: "Darkness.",
    next: 'SeaBelow_10'
},

SeaBelow_10: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',  active: false },
        { name: 'Bakunawa', img: '',                                             position: 'right', active: true  }
    ],
    speaker: 'Bakunawa',
    text: "Again and again until nothing remains.",
    next: 'SeaBelow_11'
},

SeaBelow_11: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: true  },
        { name: 'Bakunawa', img: '',                                             position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari collapses to her knees as silver cracks spread across her skin.",
    next: 'SeaBelow_12'
},

SeaBelow_12: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                             position: 'right',  active: true  }
    ],
    speaker: 'Bakunawa',
    text: "Help me end it.",
    next: 'SeaBelow_choice'
},

// ─── CHOICE 3A ───────────────────────────────────────────

SeaBelow_choice: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: true  },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                               position: 'right',  active: false }
    ],
    speaker: 'Bathala',
    isChoice: true,
    text: "What do you do?",
    choices: [
        { text: 'Trust Mayari',   next: 'SeaBelow_A1' },
        { text: 'Trust Bakunawa', next: 'SeaBelow_B1' }
    ]
},

// ─── 3A.1 Trust Mayari ───────────────────────────────────

SeaBelow_A1: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                               position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala immediately runs toward Mayari.",
    next: 'SeaBelow_A2'
},

SeaBelow_A2: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png', position: 'left',   active: true  },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',           position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                                     position: 'right',  active: false }
    ],
    speaker: 'Bathala',
    text: "I'm not abandoning you.",
    next: 'SeaBelow_A3'
},

SeaBelow_A3: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: true  },
        { name: 'Bakunawa', img: '',                                               position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari looks up weakly.",
    next: 'SeaBelow_A4'
},

SeaBelow_A4: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                               position: 'right',  active: true  }
    ],
    speaker: 'Narrator',
    text: "Bakunawa's expression darkens.",
    next: 'SeaBelow_A5'
},

SeaBelow_A5: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                               position: 'right',  active: true  }
    ],
    speaker: 'Bakunawa',
    text: "Then you choose endless suffering.",
    next: 'SeaBelow_A6'
},

SeaBelow_A6: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Angry.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',   position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                             position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "The ocean erupts violently beneath the city.",
    next: 'end_3A_A'
},

end_3A_A: {
    bg: 'black',
    location: '',
    chars: [],
    speaker: 'Narrator',
    text: "To be continued in the Final Chapter...",
    isEnd: true
},

// ─── 3A.2 Trust Bakunawa ─────────────────────────────────

SeaBelow_B1: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala hesitates before looking toward Bakunawa.",
    next: 'SeaBelow_B2'
},

SeaBelow_B2: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left',   active: true  },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',       position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                                 position: 'right',  active: false }
    ],
    speaker: 'Bathala',
    text: "If ending this saves her… then maybe you're right.",
    next: 'SeaBelow_B3'
},

SeaBelow_B3: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: true  },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari freezes in shock.",
    next: 'SeaBelow_B4'
},

SeaBelow_B4: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',       position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'center', active: true  },
        { name: 'Bakunawa', img: '',                                                 position: 'right',  active: false }
    ],
    speaker: 'Mayari',
    text: "…Bathala?",
    next: 'SeaBelow_B5'
},

SeaBelow_B5: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "The moon above begins cracking faster.",
    next: 'end_3A_B'
},

end_3A_B: {
    bg: 'black',
    location: '',
    chars: [],
    speaker: 'Narrator',
    text: "To be continued in the Final Chapter...",
    isEnd: true
},


// ═══════════════════════════════════════════════════════
// CHAPTER 3B — THE SEA ABOVE THE CITY
// ═══════════════════════════════════════════════════════

SeaAbove_start: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "The city floods beneath crimson skies while Mayari stands alone near the collapsing shoreline.",
    next: 'SeaAbove_1'
},

SeaAbove_1: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: true  }
    ],
    speaker: 'Bakunawa',
    text: "You pushed her away exactly like everyone else.",
    next: 'SeaAbove_2'
},

SeaAbove_2: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: true  },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala watches silently as Mayari struggles to remain standing.",
    next: 'SeaAbove_3'
},

SeaAbove_3: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',       position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'center', active: true  },
        { name: 'Bakunawa', img: '',                                                 position: 'right',  active: false }
    ],
    speaker: 'Mayari',
    text: "I told you this would happen…",
    next: 'SeaAbove_4'
},

SeaAbove_4: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "The moon darkens further overhead.",
    next: 'SeaAbove_choice'
},

// ─── CHOICE 3B ───────────────────────────────────────────

SeaAbove_choice: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: true  },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                               position: 'right',  active: false }
    ],
    speaker: 'Bathala',
    isChoice: true,
    text: "What do you do?",
    choices: [
        { text: 'Trust Mayari',   next: 'SeaAbove_A1' },
        { text: 'Trust Bakunawa', next: 'SeaAbove_B1' }
    ]
},

// ─── 3B.1 Trust Mayari ───────────────────────────────────

SeaAbove_A1: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',     position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                               position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala finally steps toward her.",
    next: 'SeaAbove_A2'
},

SeaAbove_A2: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png', position: 'left',   active: true  },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png',       position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                                 position: 'right',  active: false }
    ],
    speaker: 'Bathala',
    text: "No. I was wrong.",
    next: 'SeaAbove_A3'
},

SeaAbove_A3: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',     position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: true  },
        { name: 'Bakunawa', img: '',                                               position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari looks shocked as he reaches for her hand.",
    next: 'SeaAbove_A4'
},

SeaAbove_A4: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png',     position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Neutral.png', position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                               position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "The silver light around her stabilizes slightly.",
    next: 'end_3B_A'
},

end_3B_A: {
    bg: 'black',
    location: '',
    chars: [],
    speaker: 'Narrator',
    text: "To be continued in the Final Chapter...",
    isEnd: true
},

// ─── 3B.2 Trust Bakunawa ─────────────────────────────────

SeaAbove_B1: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala remains still.",
    next: 'SeaAbove_B2'
},

SeaAbove_B2: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Bakunawa slowly smiles.",
    next: 'SeaAbove_B3'
},

SeaAbove_B3: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: true  }
    ],
    speaker: 'Bakunawa',
    text: "At last.",
    next: 'SeaAbove_B4'
},

SeaAbove_B4: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: true  },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari closes her eyes quietly.",
    next: 'SeaAbove_B5'
},

SeaAbove_B5: {
    bg: 'url("Assets/Background/VisNovBG/MayariBG/MayariChapter3A.png") center/cover no-repeat',
    location: 'Manila Bay',
    chars: [
        { name: 'Bathala',  img: 'Assets/Characters/Bathala/Bathala_Sad.png', position: 'left',   active: false },
        { name: 'Mayari',   img: 'Assets/Characters/Mayari/L_Mayari_Sad.png', position: 'center', active: false },
        { name: 'Bakunawa', img: '',                                           position: 'right',  active: false }
    ],
    speaker: 'Narrator',
    text: "The moon begins collapsing completely.",
    next: 'end_3B_B'
},

end_3B_B: {
    bg: 'black',
    location: '',
    chars: [],
    speaker: 'Narrator',
    text: "To be continued in the Final Chapter...",
    isEnd: true
},


    
}