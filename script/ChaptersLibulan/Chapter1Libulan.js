const chapter1 = {

    scene_cafe_start: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [],
        speaker: 'Narrator',
        text: "The hospital cafeteria smelled faintly of coffee, disinfectant, and exhaustion while fluorescent lights hummed softly overhead.",
        next: 'scene_cafe_1'
    },

    scene_cafe_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan sat upside-down across one of the empty chairs while Sidapa calmly drank bitter coffee beside the vending machines.",
        next: 'scene_cafe_2'
    },

    scene_cafe_2: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "You followed me.",
        next: 'scene_cafe_3'
    },

    scene_cafe_3: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "You disappeared before I could ask questions.",
        next: 'scene_cafe_4'
    },

    scene_cafe_4: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "You still came to a hospital at three in the morning.",
        next: 'scene_cafe_5'
    },

    scene_cafe_5: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "That's called dedication.",
        next: 'scene_cafe_6'
    },

    scene_cafe_6: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Sidapa looked unimpressed. Libulan studied him carefully. Unlike everyone else — Sidapa's emotions felt strangely muted. Not absent. Buried. Controlled so deeply Libulan could barely affect them at all. Which fascinated him immediately.",
        next: 'scene_cafe_7'
    },

    scene_cafe_7: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "So what's your deal?",
        next: 'scene_cafe_8'
    },

    scene_cafe_8: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Sidapa remained silent.",
        next: 'scene_cafe_9'
    },

    scene_cafe_9: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "You've got the whole emotionally damaged mysterious guy thing going on.",
        next: 'scene_cafe_10'
    },

    scene_cafe_10: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "I work night shifts around dying people.",
        next: 'scene_cafe_11'
    },

    scene_cafe_11: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan immediately stopped joking. The cafeteria suddenly felt quieter. Sidapa looked toward the exhausted patients sleeping nearby.",
        next: 'scene_cafe_12'
    },

    scene_cafe_12: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "…You really see something, don't you?",
        next: 'scene_cafe_13'
    },

    scene_cafe_13: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "I see how long people have left.",
        next: 'scene_cafe_14'
    },

    scene_cafe_14: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "…That's horrible.",
        next: 'scene_cafe_15'
    },

    scene_cafe_15: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "You get used to it.",
        next: 'scene_cafe_16'
    },

    scene_cafe_16: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan quietly frowned. No, he thought. Nobody gets used to something like that. Before he could answer — every hospital light suddenly flickered violently. The countdowns above the patients froze.",
        next: 'scene_cafe_17'
    },

    scene_cafe_17: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan',  img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',   active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right',  active: false },
            { name: 'Bakunawa', img: '', position: 'center', active: true  }
        ],
        speaker: 'Bakunawa',
        text: "You continue delaying the inevitable.",
        next: 'scene_cafe_18'
    },

    scene_cafe_18: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan',  img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',   active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right',  active: true  },
            { name: 'Bakunawa', img: '', position: 'center', active: false }
        ],
        speaker: 'Narrator',
        text: "Sidapa immediately stood. For the first time since meeting him — Libulan saw genuine fear in his eyes.",
        next: 'scene_cafe_choice'
    },

    scene_cafe_choice: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter1.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "What do I do?",
        isChoice: true,
        choices: [
            { text: 'Follow Sidapa', next: 'scene_ch2a_start' },
            { text: 'Investigate Alone', next: 'scene_ch2b_start' }
        ]
    },

    scene_ch2a_start: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Corridor',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left', active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan followed Sidapa through the quiet hospital halls, the fluorescent lights humming above them.",
        next: 'scene_ch2a_1'
    },

    scene_ch2a_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Corridor',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left', active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Sidapa',
        text: "Stay behind me. There are things down here that don't care about music.",
        next: 'scene_ch2a_end'
    },

    scene_ch2a_end: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Corridor',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left', active: true }
        ],
        speaker: 'Narrator',
        text: "Chapter 1 continues...",
        isEnd: true
    },

    scene_ch2b_start: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left', active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan decided to investigate alone, slipping away from Sidapa into the dim back hall.",
        next: 'scene_ch2b_1'
    },

    scene_ch2b_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Hospital Back Hall',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left', active: true }
        ],
        speaker: 'Libulan',
        text: "Something doesn't feel right here. I need to know what Sidapa is hiding.",
        next: 'scene_ch2b_end'
    },

    scene_ch2b_end: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Hospital Back Hall',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left', active: true }
        ],
        speaker: 'Narrator',
        text: "Chapter 1 continues...",
        isEnd: true
    }

}
