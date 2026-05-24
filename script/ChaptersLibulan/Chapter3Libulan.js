const chapter3 = {

    // ─────────────────────────────────────────────
    // CHAPTER 3A — STATIC HEARTS
    // (reached by: Stay Calm / Reject Bakunawa)
    // ─────────────────────────────────────────────

    scene_ch3a_start: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [],
        speaker: 'Narrator',
        text: "The city falls into chaos beneath a crimson moon while every sound system in Manila begins malfunctioning simultaneously. Music distorts across radio stations. Concert speakers explode. Car alarms scream endlessly through flooded streets.",
        next: 'scene_ch3a_1'
    },

    scene_ch3a_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left', active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan stands in the middle of the rooftop while overwhelming emotional noise floods his mind from every direction. Fear. Grief. Loneliness. Panic. Thousands of emotions crashing into him at once.",
        next: 'scene_ch3a_2'
    },

    scene_ch3a_2: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Narrator',
        text: "Libulan collapses to one knee. Sidapa immediately catches him before he falls.",
        next: 'scene_ch3a_3'
    },

    scene_ch3a_3: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "Libulan.",
        next: 'scene_ch3a_4'
    },

    scene_ch3a_4: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "For a moment — everything becomes quiet again. Libulan stares at him silently. And realizes — Sidapa's presence feels calmer than the music ever did. Which honestly scares him more.",
        next: 'scene_ch3a_5'
    },

    scene_ch3a_5: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan',  img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',   active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right',  active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: true  }
        ],
        speaker: 'Bakunawa',
        text: "When emotion disappears — so does suffering.",
        next: 'scene_ch3a_6'
    },

    scene_ch3a_6: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan',  img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',   active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right',  active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: false }
        ],
        speaker: 'System',
        text: "FINAL DECISION PROTOCOL ACTIVATED",
        next: 'scene_ch3a_choice'
    },

    scene_ch3a_choice: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "What do I do?",
        isChoice: true,
        choices: [
            { text: '"…Don\'t let me disappear." — Trust Sidapa', next: 'scene_final_start' },
            { text: '"No. This is my responsibility." — Face Bakunawa Alone', next: 'scene_final_start' }
        ]
    },

    // ─────────────────────────────────────────────
    // CHAPTER 3B — THE SILENT MOON
    // (reached by: Hide Your Fear / Listen to Bakunawa)
    // ─────────────────────────────────────────────

    scene_ch3b_start: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3B.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [],
        speaker: 'Narrator',
        text: "The eclipse deepens above Manila until the entire city becomes unnaturally quiet. No music. No traffic. No voices. Only silence.",
        next: 'scene_ch3b_1'
    },

    scene_ch3b_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3B.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left', active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan stands beneath the dead sky while Bakunawa's massive serpent form coils endlessly overhead. For the first time in his life — he feels absolutely nothing. And somehow — that emptiness hurts more than grief ever could.",
        next: 'scene_ch3b_2'
    },

    scene_ch3b_2: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3B.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "…This isn't peace.",
        next: 'scene_ch3b_3'
    },

    scene_ch3b_3: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter3B.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan slowly looks toward him. And realizes — he doesn't want this silence if Sidapa disappears into it too.",
        next: 'scene_final_start'
    },

    // ─────────────────────────────────────────────
    // FINAL CHAPTER — SONGS BENEATH THE STATIC
    // ─────────────────────────────────────────────

    scene_final_start: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Above Manila — Eclipse',
        chars: [],
        speaker: 'Narrator',
        text: "The heavens fracture above Manila while enormous waves rise around the city beneath the crimson eclipse. Bakunawa's serpent form coils endlessly around the broken moon. Golden eyes brighter than stars stare down upon the frozen world below.",
        next: 'scene_final_1'
    },

    scene_final_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Above Manila — Eclipse',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "You don't need to control emotions to matter.",
        next: 'scene_final_2'
    },

    scene_final_2: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Above Manila — Eclipse',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan stares silently. Nobody has ever said something like that to him before.",
        next: 'scene_final_3'
    },

    scene_final_3: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Above Manila — Eclipse',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'System',
        text: "FINAL SYNCHRONIZATION ACTIVATED — Outcome will determine ending authority.",
        next: 'scene_final_choice'
    },

    scene_final_choice: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Above Manila — Eclipse',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "The headphones are still in my hands. What do I do?",
        isChoice: true,
        choices: [
            { text: 'Let humanity feel — play the music raw and honest. ', next: 'scene_good_ending' },
            { text: 'Accept the silence — remove the headphones. ', next: 'scene_bad_ending' }
        ]
    },

    // ─────────────────────────────────────────────
    // GOOD ENDING — THE SONG BEFORE DAWN
    // ─────────────────────────────────────────────

    scene_good_ending: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Hospital Rooftop — Dawn',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan slowly puts the headphones back on. But this time — he doesn't force emotion into the city. He simply plays music. Raw. Honest. Human.",
        next: 'scene_good_ending_1'
    },

    scene_good_ending_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Hospital Rooftop — Dawn',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "People across Manila begin moving again. Crying. Laughing. Holding each other. Living. Bakunawa screams as silver cracks spread across the eclipse. The moon slowly restores itself.",
        next: 'scene_good_ending_2'
    },

    scene_good_ending_2: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Hospital Rooftop — Dawn',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Sidapa quietly stands beside Libulan beneath the returning light. Not lovers. Not yet. But no longer strangers either.",
        next: 'scene_good_ending_3'
    },

    scene_good_ending_3: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Hospital Rooftop — Dawn',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "…You're still emotionally terrifying, by the way.",
        next: 'scene_good_ending_4'
    },

    scene_good_ending_4: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Hospital Rooftop — Dawn',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "I've been told.",
        next: 'scene_good_ending_end'
    },

    scene_good_ending_end: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Hospital Rooftop — Dawn',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'System',
        text: "Ending Unlocked: THE SONG BEFORE DAWN",
        next: 'end'
    },

    // ─────────────────────────────────────────────
    // BAD ENDING — THE CITY WITHOUT HEARTBEATS
    // ─────────────────────────────────────────────

    scene_bad_ending: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Above Manila — Eclipse',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "…Maybe people are happier numb.",
        next: 'scene_bad_ending_1'
    },

    scene_bad_ending_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Above Manila — Eclipse',
        chars: [
            { name: 'Libulan',  img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',   active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right',  active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: true  }
        ],
        speaker: 'Narrator',
        text: "The music dies completely. Bakunawa peacefully closes his eyes. The eclipse fully consumes the moon. Every emotion disappears from humanity forever.",
        next: 'scene_bad_ending_2'
    },

    scene_bad_ending_2: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Manila — The Silent City',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Sidapa quietly watches the final countdowns vanish into darkness. Manila continues functioning normally. Except nobody smiles, cries, or truly connects with anyone anymore.",
        next: 'scene_bad_ending_end'
    },

    scene_bad_ending_end: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapterFinal.png') center/cover no-repeat",
        location: 'Manila — The Silent City',
        chars: [],
        speaker: 'System',
        text: "Ending Locked: THE CITY WITHOUT HEARTBEATS",
        next: 'end'
    },

    // ─────────────────────────────────────────────
    // END
    // ─────────────────────────────────────────────

    end: {
        bg: 'black',
        location: '',
        chars: [],
        speaker: 'Narrator',
        text: "to be continued...",
        isEnd: true
    },

}
