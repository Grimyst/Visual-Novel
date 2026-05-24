const chapter2 = {

    // ─────────────────────────────────────────────
    // CHAPTER 2A — THE ROOFTOP WHERE TIME STOPPED
    // (reached by: Follow Sidapa)
    // ─────────────────────────────────────────────

    scene_ch2a_start: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "Okay, nope. If cryptic demon voices are involved now, I'm definitely following you.",
        next: 'scene_ch2a_1'
    },

    scene_ch2a_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "That's a terrible survival instinct.",
        next: 'scene_ch2a_2'
    },

    scene_ch2a_2: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "I never claimed to have good ones.",
        next: 'scene_ch2a_3'
    },

    scene_ch2a_3: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "The hospital lights continued flickering. Somewhere below the building — something growled.",
        next: 'scene_rooftop_start'
    },

    scene_rooftop_start: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "Rain falls softly across the hospital rooftop while Manila glows endlessly below in rivers of neon and distant headlights beneath the storm. Libulan sits on the ledge while Sidapa stands nearby beneath flickering rooftop lights. Neither speaks for a while. Which feels strangely comfortable.",
        next: 'scene_rooftop_1'
    },

    scene_rooftop_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "You're really bad at conversations.",
        next: 'scene_rooftop_2'
    },

    scene_rooftop_2: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "I prefer silence.",
        next: 'scene_rooftop_3'
    },

    scene_rooftop_3: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "Yeah. I noticed.",
        next: 'scene_rooftop_4'
    },

    scene_rooftop_4: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "…Do the countdowns scare you?",
        next: 'scene_rooftop_5'
    },

    scene_rooftop_5: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "Only when they belong to people I know.",
        next: 'scene_rooftop_6'
    },

    scene_rooftop_6: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "For the first time — Libulan hears exhaustion instead of coldness in his voice. And suddenly — he wants to understand him. Which feels dangerous.",
        next: 'scene_rooftop_7'
    },

    scene_rooftop_7: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "The rooftop lights flicker violently. Every clock in the city suddenly stops. Cars freeze below. Rain hangs motionless in midair.",
        next: 'scene_rooftop_8'
    },

    scene_rooftop_8: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "…Okay. That's new.",
        next: 'scene_rooftop_9'
    },

    scene_rooftop_9: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan',  img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',   active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right',  active: false },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: true  }
        ],
        speaker: 'Bakunawa',
        text: "Even gods fear endings.",
        next: 'scene_rooftop_choice'
    },

    scene_rooftop_choice: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2A.png') center/cover no-repeat",
        location: 'Hospital Rooftop',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "How do I respond to this?",
        isChoice: true,
        choices: [
            { text: '"Please tell me you have at least one reasonable explanation." — Stay Calm', next: 'scene_ch3a_start' },
            { text: '"Cool. Love apocalyptic horror." — Hide Your Fear', next: 'scene_ch3b_start' }
        ]
    },

    // ─────────────────────────────────────────────
    // CHAPTER 2B — THE THING BELOW THE CITY
    // (reached by: Investigate Alone)
    // ─────────────────────────────────────────────

    scene_ch2b_start: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "…No. I'm tired of people hiding things from me.",
        next: 'scene_ch2b_1'
    },

    scene_ch2b_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: true  }
        ],
        speaker: 'Sidapa',
        text: "You don't understand what's down there.",
        next: 'scene_ch2b_2'
    },

    scene_ch2b_2: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "Then I'll learn.",
        next: 'scene_ch2b_3'
    },

    scene_ch2b_3: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Hospital Cafeteria',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: false },
            { name: 'Sidapa',  img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Narrator',
        text: "The elevator lights suddenly died. Darkness flooded the hallway.",
        next: 'scene_tunnel_start'
    },

    scene_tunnel_start: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Maintenance Tunnels — Beneath Hospital',
        chars: [],
        speaker: 'Narrator',
        text: "The abandoned maintenance tunnels beneath the hospital echo endlessly with dripping water and distant distorted music. Libulan walks carefully through the darkness alone while emergency lights flicker weakly overhead.",
        next: 'scene_tunnel_1'
    },

    scene_tunnel_1: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Maintenance Tunnels — Beneath Hospital',
        chars: [],
        speaker: 'Narrator',
        text: "The deeper he goes — the quieter the world becomes. Until eventually — even his own heartbeat sounds distant.",
        next: 'scene_tunnel_2'
    },

    scene_tunnel_2: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Maintenance Tunnels — Beneath Hospital',
        chars: [
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: true }
        ],
        speaker: 'Narrator',
        text: "Then he sees him. Bakunawa stands calmly within the darkness. Human-shaped. But wrong somehow. Golden eyes glowing softly. And behind him — something massive moves endlessly through the shadows.",
        next: 'scene_tunnel_3'
    },

    scene_tunnel_3: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Maintenance Tunnels — Beneath Hospital',
        chars: [
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: true }
        ],
        speaker: 'Bakunawa',
        text: "You manipulate emotions because humans fear emptiness.",
        next: 'scene_tunnel_4'
    },

    scene_tunnel_4: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Maintenance Tunnels — Beneath Hospital',
        chars: [
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: true }
        ],
        speaker: 'Bakunawa',
        text: "But you fear emptiness most of all.",
        next: 'scene_tunnel_5'
    },

    scene_tunnel_5: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Maintenance Tunnels — Beneath Hospital',
        chars: [
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: false }
        ],
        speaker: 'Narrator',
        text: "The tunnel lights flicker violently. Libulan suddenly realizes — he can't hear music anymore. Not even faintly. For the first time in years — silence terrifies him.",
        next: 'scene_tunnel_choice'
    },

    scene_tunnel_choice: {
        bg: "url('Assets/Background/VisNovBG/LibulanBG/LibulanChapter2B.png') center/cover no-repeat",
        location: 'Maintenance Tunnels — Beneath Hospital',
        chars: [
            { name: 'Libulan',  img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'left',  active: true  },
            { name: 'Bakunawa', img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Libulan',
        text: "What do I say?",
        isChoice: true,
        choices: [
            { text: '"People deserve to feel things." — Reject Bakunawa', next: 'scene_ch3a_start' },
            { text: '"…What if emotions just make people suffer?" — Listen to Him', next: 'scene_ch3b_start' }
        ]
    },

}
