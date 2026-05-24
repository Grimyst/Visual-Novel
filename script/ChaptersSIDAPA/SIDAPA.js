const scenes = {
    Chapter1_start: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        bgm: 'Assets/Songs/SidapaST.mp3',
        chars: [],
        speaker: 'Narrator',
        text: "Rain poured endlessly against the hospital windows while Manila dissolved outside into rivers of neon light, flooded streets, and reflections stretching endlessly across the wet glass like ghosts drifting through the storm.",
        next: 'prologue1'
    },

    prologue1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [],
        speaker: 'Narrator',
        text: "The emergency ward smelled faintly of antiseptic, coffee, and exhaustion. Machines beeped softly in distant rooms.",
        next: 'prologue2'
    },

    prologue2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Somewhere nearby, someone cried quietly behind a curtain.\nBathala sat alone in the hospital waiting area with unfinished university notes spread across his lap while fluorescent lights flickered overhead every few seconds.",
        next: 'prologue3'
    },

    prologue3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [{ name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false }],
        speaker: 'Narrator',
        text: "You only came here because your classmate collapsed during finals week. You were supposed to leave hours ago.",
        next: 'prologue4'
    },

    prologue4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [{ name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false }],
        speaker: 'Narrator',
        text: "But something about tonight feels wrong. \nLike the building itself is waiting...",
        next: 'prologue5'
    },
    
    prologue5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [{ name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false }],
        speaker: 'Narrator',
        text: "Bathala rubbed his tired eyes before glancing toward the hallway nearby. A man wearing black hospital scrubs walked silently past the waiting room.",
        next: 'prologue6'
    },

    prologue6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [{ name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false }],
        speaker: 'Narrator',
        text: "The atmosphere shifted instantly. Conversations lowered. The crying stopped.",
        next: 'prologue7'
    },

    prologue7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [{ name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false }],
        speaker: 'Narrator',
        text: "Even the flickering lights stabilized briefly. And above every person nearby—Bathala suddenly saw glowing silver numbers...",
        next: 'prologue8'
    },

    prologue8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [{ name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false }],
        speaker: 'Narrator',
        text: "01 YEAR - 08 MONTHS - 04 DAYS - 17 MINUTES",
        next: 'prologue9'
    },

    prologue9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [{ name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false }],
        speaker: 'Narrator',
        text: "Tiny countdowns floated above people's heads like invisible clocks. Bathala immediately stood up.",
        next: 'prologue10'
    },

    prologue10: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Bathala',
        text: "...What the hell?!",
        next: 'prologue11'
    },

    prologue11: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "The man in black suddenly stopped walking. Slowly— He turned toward Bathala.",
        next: 'prologue12'
    },

    prologue12: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Calm eyes. Exhausted expression. Dangerously quiet...",
        next: 'prologue13'
    },

    prologue13: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png', position: 'right', active: true }   
        ],
        speaker: 'Sidapa',
        text: "You can see them.",
        next: 'prologue14'
    },

    prologue14: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Bathala',
        text: "See what?",
        next: 'prologue15'
    },

    prologue15: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa looked toward an elderly patient sleeping near the hallway.   00 HOURS - 01 MINUTE",
        next: 'prologue16'
    },

    prologue16: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png', position: 'right', active: true }   
        ],
        speaker: 'Sidapa',
        text: "The endings...",
        next: 'prologue17'
    },

    prologue17: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "A heart monitor suddenly flatlined nearby. Nurses rushed past them instantly. The silver countdown vanished.",
        next: 'prologue18'
    },

    prologue18: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Bathala stared in horror. Sidapa closed his eyes briefly.",
        next: 'prologue19'
    },

    prologue19: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png', position: 'right', active: true }   
        ],
        speaker: 'Sidapa',
        text: "... Right on time.",
        next: 'prologue20'
    },

    prologue20: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "The lights overhead suddenly flickered violently. Once.. Twice..",
        next: 'prologue21'
    },

    prologue21: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Then every speaker inside the hospital erupted with distorted music loud enough to shake the walls.",
        next: 'prologue22'
    },

    prologue22: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Patients screamed. Doctors froze. And somewhere within the noise—",
        next: 'prologue23'
    },

    prologue23: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Someone laughed softly. Warm. Playful. Almost comforting.",
        next: 'prologue24'
    },

    prologue24: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral_Mouth.png',   position: 'left',  active: true},
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Libulan',
        text: "Wow. Hospitals really know how to kill the mood.",
        next: 'prologue25'
    },

    prologue25: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'left',  active: false},
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Music echoed through the dark hallway as a man stepped casually from the emergency stairwell wearing headphones around his neck while silver jewelry reflected faintly beneath the hospital lights.",
        next: 'prologue26'
    },

    prologue26: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'left',  active: false},
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "The panic around the room softened instantly. People calmed down. Even the crying stopped.",
        next: 'prologue27'
    },

    prologue27: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false} 
        ],
        speaker: 'Narrator',
        text: "Bathala looked between them. The man who carried death like silence... And the man who carried emotion like music...",
        next: 'prologue28'
    },

    prologue28: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Bathala',
        text: "... Who are you people?",
        next: 'prologue29'
    },

    prologue29: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa's expression suddenly hardened. For the first time— fear crossed his face.",
        next: 'prologue30'
    },

    prologue30: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png', position: 'right', active: true }   
        ],
        speaker: 'Sidapa',
        text: "... Why can't I see your lifespan?",
        next: 'prologue31'
    },

    prologue31: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false}
        ],
        speaker: 'Narrator',
        text: "Libulan's smile faded slightly.",
        next: 'prologue32'
    },

    prologue32: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "The hospital lights dimmed again. Then every silver countdown inside the building froze completely.",
        next: 'prologue33'
    },

    prologue33: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'System Warning:',
        text: "LIFESPAN DETECTION ERROR\nUNKNOWN ENTITY DETECTED",
        next: 'prologue34'
    },

    prologue34: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "A deep distorted voice echoed from somewhere beneath the hospital.",
        next: 'prologue35'
    },

    prologue35: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Bakunawa',
        text: "You still cling to endings like they matter.",
        next: 'prologue36'
    },

    prologue36: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
        chars: [],
        speaker: 'Narrator',
        text: "The entire building shook violently. And somewhere below the city—   something enormous moved.",
        next: 'Ch1'
    },

    Ch1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [],
        speaker: 'Narrator',
        text: "The underground club beneath Manila pulsed endlessly with bass loud enough to shake the walls while neon lights bled across cigarette smoke, crowded bodies, and spilled drinks reflecting against the dark floor like liquid stars.",
        next: 'ch1_1'
    },

    ch1_1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala sat awkwardly near the bar while Sidapa stood nearby looking visibly uncomfortable.",
        next: 'ch1_2'
    },

    ch1_2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png', position: 'right', active: true }   
        ],
        speaker: 'Sidapa',
        text: "This place feels like several health violations combined.",
        next: 'ch1_3'
    },

        ch1_3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Libulan laughed while adjusting the music controls.",
        next: 'ch1_4'
    },

    ch1_4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral_mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Libulan',
        text: "That's the aesthetic.",
        next: 'ch1_5'
    },

    ch1_5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala watched the crowd carefully. Every person dancing below carried distorted silver countdowns above their heads.",
        next: 'ch1_6'
    },

    ch1_6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Some slowed. Some accelerated. Some vanished completely whenever the music intensified.",
        next: 'ch1_7'
    },

    ch1_7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true }   
        ],
        speaker: 'Bathala',
        text: "...You're changing them.",
        next: 'ch1_8'
    },

    ch1_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan avoided eye contact briefly.",
        next: 'ch1_9'
    },

    ch1_9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Libulan',
        text: "Technically.",
        next: 'ch1_10'
    },

    ch1_10: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png',   position: 'right',  active: true }
        ],
        speaker: 'Sidapa',
        text: "Emotion directly affects lifespan stability.",
        next: 'ch1_11'
    },

    ch1_11: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false }  
        ],
        speaker: 'Narrator',
        text: "Libulan smirked.",
        next: 'ch1_12'
    },

    ch1_12: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral_Mouth.png', position: 'right', active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png',   position: 'left',  active: false }
        ],
        speaker: 'Libulan',
        text: "God, you make everything sound depressing.",
        next: 'ch1_13'
    },

    ch1_13: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false }  
        ],
        speaker: 'Narrator',
        text: "The music suddenly softened. The atmosphere inside the club changed instantly.",
        next: 'ch1_14'
    },

    ch1_14: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false }  
        ],
        speaker: 'Narrator',
        text: "People who were dancing moments ago now looked emotional. Some cried. Others laughed uncontrollably. One couple kissed desperately like they were running out of time.",
        next: 'ch1_15'
    },

    ch1_15: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa quietly stared at Libulan.",
        next: 'ch1_16'
    },

    ch1_16: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'right', active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Sidapa',
        text: "... You're afraid.",
        next: 'ch1_17'
    },

    ch1_17: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "Libulan froze.",
        next: 'ch1_18'
    },

    ch1_18: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "The music skipped.",
        next: 'ch1_19'
    },

    ch1_19: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png', position: 'right', active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png',   position: 'left',  active: false }
        ],
        speaker: 'Libulan',
        text: "What?",
        next: 'ch1_20'
    },

    ch1_20: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Sad.png', position: 'right', active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Sidapa',
        text: "You keep people emotionally overwhelmed because silence terrifies you.",
        next: 'ch1_21'
    },

    ch1_21: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "For the first time— Libulan stopped smiling.",
        next: 'ch1_22'
    },

    ch1_22: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "The lights overhead flickered violently. Then every speaker inside the club suddenly emitted deep distorted static. A voice echoed through the darkness.",
        next: 'ch1_23'
    },

    ch1_23: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bathala',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bakunawa',
        text: "You continue pretending feelings can save anyone.",
        next: 'ch1_24'
    },

    ch1_24: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "The crowd below immediately collapsed unconscious.",
        next: 'ch1_25'
    },

    ch1_25: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "What the hell?!",
        next: 'ch1_26'
    },

    ch1_26: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "The shadows near the dance floor twisted unnaturally. A tall figure slowly emerged beneath the broken lights. Golden eyes. Dark clothing. A calm expression hiding something monstrous beneath it.",
        next: 'ch1_27'
    },

    ch1_27: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bathala',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bakunawa',
        text: "Still entertaining mortals before the world ends?",
        next: 'ch1_28'
    },

    ch1_28: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Angry.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "Libulan's expression hardened instantly.",
        next: 'ch1_29'
    },

    ch1_29: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Angry_Mouth.png', position: 'left', active: true }
        ],
        speaker: 'Libulan',
        text: "...You shouldn't be here.",
        next: 'ch1_30'
    },

    ch1_30: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bathala',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'left',  active: false },
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'center',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Bakunawa looked toward Sidapa. Then toward Bathala.",
        next: 'ch1_31'
    },

    ch1_31: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'right',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bakunawa',
        text: "So this is the one observing the system.",
        next: 'ch1_32'
    },

    ch1_32: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'right',  active: true },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'left',  active: false }
       ],
        speaker: 'Bathala',
        text: "... The what?",
        next: 'ch1_33'
    },

    ch1_33: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'right',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'left',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "The thing pretending your choices matter.",
        next: 'ch1_34'
    },

    ch1_34: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'right',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'left',  active: false }
       ],
        speaker: 'Narrator',
        text: "The walls around the club trembled softly. For one horrifying second—something enormous moved behind Bakunawa's shadow. A massive serpent shape coiling endlessly through darkness beneath the city.",
        next: 'ch1_35'
    },

    ch1_35: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'center',  active: true }
        ],
        speaker: 'Bathala',
        
        isChoice: true,
        
        text: "",
        choices: [
            { text: '"Stand Beside Sidapa"', next: 'ch1_36a' },
            { text: '"Ask Bakunawa what he wants"', next: 'ch1_36b' },
        ]
    },

    ch1_36a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Bathala immediately steps beside Sidapa.",
        next: 'ch1_37a'
    },

    ch1_37a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png',   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "I don't know what's happening, but I'm not letting that thing near us.",
        next: 'ch1_38a'
    },

    ch1_38a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa looks briefly surprised.",
        next: 'ch1_39a'
    },

    ch1_39a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'left',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa laughs softly.",
        next: 'ch1_40a'
    },

    ch1_40a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'left',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "You defend death itself?",
        next: 'ch1_41a'
    },

    ch1_41a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "He's still human.",
        next: 'ch1_42a'
    },

    ch1_42a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa quietly looks away.",
        next: 'ch1_43a'
    },

    ch1_43a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'left',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "... That's exactly the problem.",
        next: 'ch1_44a'
    },

    ch1_44a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "The shadows around the club deepen violently.",
        next: 'Ch2A'
    },

    ch1_36b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala cautiously steps forward.",
        next: 'ch1_37b'
    },

    ch1_37b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "What exactly are you trying to do.",
        next: 'ch1_38b'
    },

    ch1_38b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'left',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa's golden eyes narrow slightly.",
        next: 'ch1_39b'
    },

    ch1_39b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'left',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "End the cycle.",
        next: 'ch1_40b'
    },

    ch1_40b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Angry_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Libulan',
        text: "Don't listen to him.",
        next: 'ch1_41b'
    },

    ch1_41b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa slowly walks beneath the flickering lights",
        next: 'ch1_42b'
    },

    ch1_42b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "Sidapa measures endings.. Libulan manipulates feelings.. And humanity continues suffering between both.",
        next: 'ch1_43b'
    },

    ch1_43b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Angry.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "What does that have to do with you?",
        next: 'ch1_44b'
    },

    ch1_44b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa smiles coldly.",
        next: 'ch1_45b'
    },

    ch1_45b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "I devour things that refuse to end.",
        next: 'ch1_46b'
    },

    ch1_46b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "The serpent shadow behind him grows larger.",
        next: 'Ch2B'
    },

    Ch2A: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [],
        speaker: 'Narrator',
        text: "Rain falls softly across the rooftop while Manila glows below in endless rivers of neon light and distant traffic.",
        next: 'ch2_1'
    },

    ch2_1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa quietly stands near the ledge. Bathala approaches carefully.",
        next: 'ch2_2'
    },

    ch2_2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "So you really see how long people have left?",
        next: 'ch2_3'
    },

    ch2_3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png',   position: 'right',  active: true }
        ],
        speaker: 'Sidapa',
        text: "Yes",
        next: 'ch2_4'
    },

    ch2_4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "... How do you live like that?",
        next: 'ch2_5'
    },

    ch2_5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa remains silent briefly.",
        next: 'ch2_6'
    },

    ch2_6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png',   position: 'right',  active: false }
        ],
        speaker: 'Sidapa',
        text: "You stop becoming surprised.",
        next: 'ch2_7'
    },

    ch2_7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false } 
        ],
        speaker: 'Narrator',
        text: "Libulan sits nearby with headphones around his neck.",
        next: 'ch2_8'
    },

    ch2_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Libulan',
        text: "He says that like it's healthy.",
        next: 'ch2_9'
    },

    ch2_9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa ignores him. Bathala Looks toward the city below",
        next: 'ch2_10'
    },

    ch2_10: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "So what exactly is Bakunawa?",
        next: 'ch2_11'
    },

    ch2_11: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "Libulan's expression darkens.",
        next: 'ch2_12'
    },

    ch2_12: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png',   position: 'right',  active: true }
        ],
        speaker: 'Libulan',
        text: "He wasn't always like this..",
        next: 'ch2_13'
    },

    ch2_13: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "The moonlight weakens overhead",
        next: 'ch2_14'
    },

    ch2_14: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png',   position: 'right',  active: true }
        ],
        speaker: 'Libulan',
        text: "Bakunawa used to devour moons because he hated being abandoned by the gods.",
        next: 'ch2_15'
    },

    ch2_15: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Libulan',
        text: "But eventually— He realized humans abandon things too.",
        next: 'ch2_16'
    },

    ch2_16: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png',   position: 'right',  active: true }
        ],
        speaker: 'Sidapa',
        text: "Memories. People. Feelings.",
        next: 'ch2_17'
    },

    ch2_17: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "Libulan quietly nods.",
        next: 'ch2_18'
    },

    ch2_18: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Libulan',
        text: "And now he wants to erase endings entirely.",
        next: 'ch2_19'
    },

    ch2_19: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "How?",
        next: 'ch2_20'
    },

    ch2_20: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa looks toward the moon.",
        next: 'ch2_21'
    },

    ch2_21: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png',   position: 'right',  active: true }
        ],
        speaker: 'Sidapa',
        text: "By stopping time..",
        next: 'ch2_22'
    },

    ch2_22: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',

        isChoice: true,
        
        text: "",
        choices: [
            { text: '"Trust Sidapa"', next: 'ch2_23a' },
            { text: '"Trust Libulan"', next: 'ch2_23b' },
        ]
    },

    ch2_23a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Bathala steps beside him",
        next: 'ch2_24a'
    },

    ch2_24a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "If endings matter, then people matter too.",
        next: 'ch2_25a'
    },

    ch2_25a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa looks stunned briefly. The silver countdowns above the city stabilize faintly.",
        next: 'ch2_26a'
    },

    ch2_26a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png',   position: 'right',  active: true }
        ],
        speaker: 'Sidapa',
        text: "...You really believe that?",
        next: 'ch2_27a'
    },

    ch2_27a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "I think temporary things matter more",
        next: 'ch2_28a'
    },

    ch2_28a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "For the first time— Sidapa smiles faintly.",
        next: 'Ch3A'
    },

    ch2_23b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala turns toward Libulan.",
        next: 'ch2_24b'
    },

    ch2_24b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "Feelings are what make life worth surviving.",
        next: 'ch2_25b'
    },

    ch2_25b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false }  
        ],
        speaker: 'Narrator',
        text: "Libulan freezes quietly.",
        next: 'ch2_26b'
    },

    ch2_26b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Sad.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "So maybe emotion matters more than fear.",
        next: 'ch2_27b'
    },

    ch2_27b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false }   
        ],
        speaker: 'Narrator',
        text: "The music softly returns through Libulan's headphones. Libulan laughs weakly.",
        next: 'ch2_28b'
    },

    ch2_28b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2A.png") center/cover no-repeat',
        location: 'ROOFTOP ABOVE THE CITY',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Neutral_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Libulan',
        text: "... That's dangerously optimistic.",
        next: 'Ch3B'
    },

    Ch2B: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [],
        speaker: 'Narrator',
        text: "The abandoned train tunnels beneath Manila echo endlessly with dripping water and distant distorted music while broken emergency lights flicker weakly overhead.",
        next: 'ch2b_1'
    },

    ch2b_1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'right',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa walks calmly ahead of Bathala. Massive serpent shadows move silently along the tunnel walls.",
        next: 'ch2b_2'
    },
    
    ch2b_2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'right',  active: false }
       ],
        speaker: 'Bathala',
        text: "You talk like humanity disappointed you.",
        next: 'ch2b_3'
    },

    ch2b_3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'right',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "Because it did.",
        next: 'ch2b_4'
    },

    ch2b_4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'right',  active: false }
       ],
        speaker: 'Narrator',
        text: "His voice echoes unnaturally",
        next: 'ch2b_5'
    },

    ch2b_5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'right',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "Humans fear endings so much they destroy each other trying to avoid them.",
        next: 'ch2b_6'
    },

    ch2b_6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'right',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "Sidapa watches death. Libulan numbs pain. But neither changes anything.",
        next: 'ch2b_7'
    },

    ch2b_7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'right',  active: false }
       ],
        speaker: 'Narrator',
        text: "The tunnel suddenly shakes violently. A massive golden eye opens within the darkness beneath the rails.",
        next: 'ch2b_8'
    },

    ch2b_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'right',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "I will.",
        next: 'ch2b_9'
    },

    ch2b_9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'center',  active: true }
        ],
        speaker: 'Bathala',

        isChoice: true,
        
        text: "",
        choices: [
            { text: '"Reject Bakunawa"', next: 'ch2b_10a' },
            { text: '"Listen to Bakunawa"', next: 'ch2b_10b' },
        ]
    },

    ch2b_10a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala steps back.",
        next: 'ch2b_11a'
    },

    ch2b_11a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "Stopping endings won't stop suffering.",
        next: 'ch2b_12a'
    },

    ch2b_12a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'right',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa quietly stares at him.",
        next: 'ch2b_13a'
    },

    ch2b_13a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "It will just stop people from living.",
        next: 'ch2b_14a'
    },

    ch2b_14a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'right',  active: true }
       ],
        speaker: 'Narrator',
        text: "The golden eye narrows slowly.",
        next: 'ch2b_15a'
    },

    ch2b_15a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'right',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "...You sound like them already.",
        next: 'Ch3A'
    },

    ch2b_10b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala lowers his gaze.",
        next: 'ch2b_11b'
    },

    ch2b_11b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "What if you're right?",
        next: 'ch2b_12b'
    },

    ch2b_12b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'right',  active: false }
       ],
        speaker: 'Narrator',
        text: "Silence fills the tunnel. Bakunawa slowly smiles.",
        next: 'ch2b_13b'
    },

    ch2b_13b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'right',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "You finally understand.",
        next: 'ch2b_14b'
    },

    ch2b_14b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'right',  active: false }
       ],
        speaker: 'Narrator',
        text: "The serpent shadows surrounding the tunnel grow larger.",
        next: 'Ch3B'
    },

    Ch3A: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "The sky above Manila turns crimson while the moon cracks apart overhead like shattered glass. Every clock in the city stops simultaneously. Cars freeze mid-motion. Rain remains suspended in the air.",
        next: 'ch3a_1'
    },

    ch3a_1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "The ocean surrounding Manila rises unnaturally toward the heavens. Sidapa collapses to one knee as silver cracks spread across his arms. Libulan's music distorts violently through the city speakers.",
        next: 'ch3a_2'
    },

    ch3a_2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "What's happening?!",
        next: 'ch3a_3'
    },

    ch3a_3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa's massive serpent form coils endlessly around the eclipsed moon above the city.",
        next: 'ch3a_4'
    },

    ch3a_4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "The world is finally escaping endings.",
        next: 'ch3a_5'
    },

    ch3a_5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Angry.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa struggles to stand",
        next: 'ch3a_6'
    },

    ch3a_6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Angry_Mouth.png',   position: 'right',  active: true }
        ],
        speaker: 'Sidapa',
        text: "If time stops completely— Everything dies.",
        next: 'ch3a_7'
    },

    ch3a_7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Angry.png', position: 'leftt', active: false }   
        ],
        speaker: 'Narrator',
        text: "Libulan weakly laughs.",
        next: 'ch3a_8'
    },

    ch3a_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png', position: 'left', active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Angry.png',   position: 'right',  active: false }
        
        ],
        speaker: 'Libulan',
        text: "Wow. That's somehow the least romantic apocalypse possible.",
        next: 'ch3a_9'
    },

    ch3a_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Angry.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Angry.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "The moon cracks again",
        next: 'ch3a_9'
    },

    ch3a_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Angry.png', position: 'right', active: false }   
        ],
        speaker: 'System Warning:',
        text: "FINAL DECISION PROTOCOL ACTIVATED",
        next: 'ch3a_9'
    },

    ch3a_9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'center',  active: true }
        ],
        speaker: 'Bathala',

        isChoice: true,
        
        text: "",
        choices: [
            { text: '"Save Sidapa"', next: 'ch3a_10a' },
            { text: '"Save Libulan"', next: 'ch3a_10b' },
        ]
    },

    ch3a_10a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Bathala immediately reaches toward Sidapa.",
        next: 'ch3a_11a'
    },

    ch3a_11a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true },
            { name: 'Sidapa',   img: 'Assets/Characters/Sidapa/Sidapa_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "You don't carry this alone anymore.",
        next: 'ch3a_12a'
    },

    ch3a_12a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa stares silently.",
        next: 'ch3a_13a'
    },

    ch3a_13a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "For the first time in centuries— someone chooses him despite knowing what he represents.",
        next: 'ch3a_14a'
    },

    ch3a_14a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "The silver countdowns across the city begin moving again.",
        next: 'FCH_1'
    },
    
    ch3a_10b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false } 
        ],
        speaker: 'Narrator',
        text: "Bathala runs toward Libulan.",
        next: 'ch3a_11b'
    },

    ch3a_11b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Bathala',
        text: "If emotions disappear, humanity disappears too.",
        next: 'ch3a_12b'
    },

    ch3a_12b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png',   position: 'right',  active: false } 
        ],
        speaker: 'Narrator',
        text: "Libulan looks shocked.",
        next: 'ch3a_13b'
    },

    ch3a_13b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false } 
        ],
        speaker: 'Narrator',
        text: "The distorted music stabilizes across the city. People begin moving again below.",
        next: 'FCH'
    },

    Ch3B: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "Darkness floods the city streets while the moon overhead slowly disappears behind Bakunawa's enormous serpent form.",
        next: 'ch3b_1'
    },

    ch3b_1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Angry.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa weakly watches the frozen skyline. Libulan's music fades almost completely. Bakunawa stands beneath the eclipsed sky.",
        next: 'ch3b_2'
    },

    ch3b_2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "Look how peaceful the world becomes once endings stop.",
        next: 'ch3b_3'
    },

    ch3b_3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala watches the motionless city silently.",
        next: 'ch3b_5'
    },

    ch3b_5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "No pain. \nNo grief. \nNo movement. \nNothing.",
        next: 'ch3b_6'
    },

    ch3b_6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        
        isChoice: true,
        
        text: "",
        choices: [
            { text: '"Fight Bakunawa"', next: 'ch3b_7a' },
            { text: '"Accept Bakunawa\'s world"', next: 'ch3b_7b' },
        ]
    },

    ch3b_7a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala steps forward.",
        next: 'ch3b_8a'
    },

    ch3b_8a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "This isn't peace.",
        next: 'ch3b_9a'
    },

    ch3b_9a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry.png',   position: 'center',  active: true }
       ],
        speaker: 'Narrator',
        text: "Bakunawa's golden eyes narrow.",
        next: 'ch3b_10a'
    },

    ch3b_10a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "It's emptiness.",
        next: 'ch3b_11a'
    },

    ch3b_11a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "The frozen ocean begins cracking violently",
        next: 'FCH_1'
    },

    ch3b_7b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala slowly lowers his head.",
        next: 'ch3b_8b'
    },

    ch3b_8b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "... Maybe humanity really is tired",
        next: 'ch3b_9b'
    },

    ch3b_9b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa looks horrified \nLibulan's expression quietly falls",
        next: 'ch3b_10b'
    },

    ch3b_10b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "The eclipse fully consumes the moon",
        next: 'FCH_1'
    },

    FCH_1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "The heavens crack apart above Manila while the ocean rises around the city like walls beneath the crimson eclipse.",
        next: 'FCH_2'
    },

    FCH_2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'center',  active: true }
       ],
        speaker: 'Narrator',
        text: "Bakunawa's massive serpent form coils endlessly across the sky.\nGolden eyes brighter than stars stare down upon the frozen world below.",
        next: 'FCH_3'
    },

    FCH_3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Angry.png', position: 'left', active: false }, 
            { name: 'Libulan', img: 'Assets/Characters/Libulan/Libulan_Sad.png', position: 'right', active: false }    
        ],
        speaker: 'Narrator',
        text: "Sidapa struggles to remain standing as silver fractures spread across his body.\nLibulan's music distorts into static.",
        next: 'FCH_4'
    },

    FCH_4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala stands between them all.",
        next: 'FCH_5'
    },

    FCH_5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "This isn't just an ending anymore…",
        next: 'FCH_6'
    },

    FCH_6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "It is the only thing it ever was.",
        next: 'FCH_7'
    },

    FCH_7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "The moon shatters again.\nSilence follows immediately. Not even wind remains.",
        next: 'FCH_8'
    },

    FCH_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Suddenly— the entire world freezes completely.",
        next: 'FCH_9'
    },

    FCH_9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "A glowing system window appears before Bathala.",
        next: 'FCH_10'
    },

    FCH_10: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }  
        ],
        speaker: 'SYSTEM ALERT',
        text: "FINAL ENDING SEQUENCE INITIATED\nNo trials. \nNo correction. \nOnly decision.",
        next: 'FCH_11'
    },

    FCH_11: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'center',  active: true } 
        ],
        speaker: 'Bathala',
        
        isChoice: true,
        
        text: "",
        choices: [
            { text: '"Accept the System"', next: 'Def_1' },
            { text: '"Reject the System"', next: 'PDE_1' },
        ]
    },

    //Default ending
    Def_1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        bgm: 'Assets/Songs/BadEndingDefaultST.mp3',
        chars: [],
        speaker: 'Narrator',
        text: "The system stabilizes instantly",
        next: 'Def_2'
    },

    Def_2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'System:',
        text: "Default ending selected",
        next: 'Def_3'
    },

    Def_3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Time resumes. \nSlowly. \nUnnaturally.",
        next: 'Def_4'
    },

    Def_4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala's breath shakes.",
        next: 'Def_5'
    },

    Def_5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true } 
        ],
        speaker: 'Bathala',
        text: "...No.",
        next: 'Def_6'
    },

    Def_6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa rises higher into the fractured sky. \nSidapa turns slightly, his body barely holding together.",
        next: 'Def_7'
    },

    Def_7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png', position: 'left', active: true }   
        ],
        speaker: 'Sidapa',
        text: "So it ends… without us deciding.",
        next: 'Def_8'
    },

    Def_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'left', active: false }   
        ],
        speaker: 'Narrator',
        text: "Libulan grips his headphones tightly as static crawls through the broken signal.",
        next: 'Def_9'
    },

    Def_9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'leftt', active: false }   
        ],
        speaker: 'Libulan',
        text: "...I hate this silence.",
        next: 'Def_10'
    },

    Def_10: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
        ],
        speaker: 'Narrator',
        text: "Bathala steps forward",
        next: 'Def_11'
    },

    Def_11: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "No. Not like this.",
        next: 'Def_12'
    },

    Def_12: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Narrator',
        text: "Bakunawa's voice echoes like collapsing thunder across the sky.",
        next: 'Def_13'
    },

    Def_13: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "You were never meant to move",
        next: 'Def_14'
    },

    Def_14: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "The moon fully shatters.\nNot into fragments.\nBut into absence.",
        next: 'Def_15'
    },

    Def_15: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "Like it was never there at all.",
        next: 'Def_16'
    },

    Def_16: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa lowers his head slightly.",
        next: 'Def_17'
    },

    Def_17: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png', position: 'center', active: true }   
        ],
        speaker: 'Sidapa',
        text: "...I'm sorry. I couldn't hold it together long enough.",
        next: 'Def_18'
    },

    Def_18: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Libulan's voice breaks, quieter now.",
        next: 'Def_19'
    },

    Def_19: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: false }   
        ],
        speaker: 'Libulan',
        text: "... I can't hear anything anymore.",
        next: 'Def_20'
    },

    Def_20: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "The final trace of sound collapses from the world.\nThe city falls into complete stillness.",
        next: 'Def_21'
    },

    Def_21: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "No sound.\nNo motion.\nNo continuation.",
        next: 'Def_22'
    },

    Def_22: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'System:',
        text: "ENDING ACTIVATED — THE WORLD WITHOUT TOMORROW",
        next: ''
    },

    PDE_1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        bgm:'Assets/Songs/SidapaST.mp3',
        chars: [],
        speaker: 'Narrator',
        text: "The system glitches violently.\nReality stutters.",
        next: 'PDE_2'
    },

    PDE_2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa turns his gaze toward Bathala.",
        next: 'PDE_3'
    },

    PDE_3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "... You still insist on choosing",
        next: 'PDE_4'
    },

    PDE_4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "If it ends anyway... Then I choose how.",
        next: 'PDE_5'
    },

    PDE_5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa slowly stands.",
        next: 'PDE_6'
    },

    PDE_6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png', position: 'center', active: true }   
        ],
        speaker: 'Sidapa',
        text: "Then don't choose without us.",
        next: 'PDE_7'
    },

    PDE_7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Libulan lifts his head slightly",
        next: 'PDE_8'
    },

    PDE_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral_Mouth.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Libulan',
        text: "...Yeah. Don't do it alone.",
        next: 'PDE_9'
    },

    PDE_9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa exhales.",
        next: 'PDE_10'
    },

    PDE_10: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png', position: 'center', active: true }   
        ],
        speaker: 'Sidapa',
        text: "This is the only kind of ending worth seeing through.",
        next: 'PDE_11'
    },

    PDE_11: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Bathala closes his eyes",
        next: 'PDE_12'
    },

    PDE_12: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Bathala',
        text: "... Then stay with me until the last second.",
        next: 'PDE_13'
    },

    PDE_13: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "The system stabilizes.\nA second window appears.",
        next: 'PDE_14'
    },

    PDE_14: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'center',  active: true }
        ],
        speaker: 'Bathala',
        
        isChoice: true,
        
        text: "",
        choices: [
            { text: '"Preserve what remains"', next: 'FC_a1' },
            { text: '"Erase the endings"', next: 'FC_b1' },
        ]
    },
    

    FC_a1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        bgm:'Assets/Songs/GoodEndingST.mp3',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Bathala steps forward.\nSidapa follows.\nLibulan removes one earcup slowly.",
        next: 'FC_a2'
    },

    FC_a2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Bathala',
        text: "I don't think endings are supposed to be clean.",
        next: 'FC_a3'
    },

    FC_a3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png', position: 'center', active: true }   
        ],
        speaker: 'Sidapa',
        text: "...They never were.",
        next: 'FC_a4'
    },

    FC_a4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Libulan',
        text: "I used to think silence was safer",
        next: 'FC_a5'
    },

    FC_a5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png', position: 'center', active: true }   
        ],
        speaker: 'Sidapa',
        text: "And was it?",
        next: 'FC_a6'
    },

    FC_a6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Libulan shakes his head.",
        next: 'FC_a7'
    },

    FC_a7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Libulan',
        text: "No.",
        next: 'FC_a8'
    },

    FC_a8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry_Mouth.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa's voice trembles across the sky",
        next: 'FC_a9'
    },

    FC_a9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "You cling to pain as if it defines you.",
        next: 'FC_a10'
    },

    FC_a10: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Bathala',
        text: "It does.",
        next: 'FC_a11'
    },

    FC_a11: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "A pause.",
        next: 'FC_a12'
    },

    FC_a12: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Bathala',
        text: "But it also proves you were here",
        next: 'FC_a13'
    },

    FC_a13: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: true }   
        ],
        speaker: 'Narrator',
        text: "Sidapa steps forward slightly",
        next: 'FC_a14'
    },

    FC_a14: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png', position: 'center', active: true }   
        ],
        speaker: 'Sidapa',
        text: "If this disappears... then what are we fighting for?",
        next: 'FC_a15'
    },

    FC_a15: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Bathala',
        text: "For the fact that it happened",
        next: 'FC_a16'
    },

    FC_a16: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "The system flickers violently",
        next: 'FC_a17'
    },

    FC_a17: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Angry_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "Then suffer again!",
        next: 'FC_a18'
    },

    FC_a18: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Bathala',
        text: "No.",
        next: 'FC_a19'
    },

    FC_a19: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "A quieter answer.",
        next: 'FC_a20'
    },

    FC_a20: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Bathala',
        text: "We live again.",
        next: 'FC_a21'
    },

    FC_a21: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "The eclipse fractures in reverse.\nSilver light spreads across the sky like healing scars.\nThe moon reforms slowly.",
        next: 'FC_a22'
    },

    FC_a22: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Imperfect. \nBut whole enough to exist.",
        next: 'FC_a23'
    },

    FC_a23: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa's form trembles. \nFor the first time— \nnot angry. Just tired.",
        next: 'FC_a24'
    },

    FC_a24: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "...So you choose to continue breaking yourselves.",
        next: 'FC_a25'
    },

    FC_a25: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral_Mouth.png', position: 'center', active: true }   
        ],
        speaker: 'Sidapa',
        text: "Everyone breaks.",
        next: 'FC_a26'
    },

    FC_a26: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral_Mouth.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: true }   
        ],
        speaker: 'Libulan',
        text: "... We just stopped pretending it was the end of us.",
        next: 'FC_a27'
    },

    FC_a27: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Rain returns. \nSoft. Warm. Alive.",
        next: 'FC_a28'
    },

    FC_a28: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "The city begins moving again. \nBreathing. Existing. Remembering.",
        next: 'FC_a29'
    },

    FC_a29: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'System:',
        text: "ENDING UNLOCKED — THE NIGHT THAT KEPT MOVING",
        next: ''
    },

//Good ending

    FC_b1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        bgm:'Assets/Songs/BadEndingCharacterST.mp3',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Bathala slowly lowers his hand.\nNo one stops him.\nSidapa looks at him quietly.",
        next: 'FC_b2'
    },

    FC_b2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Neutral.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png', position: 'center', active: true }   
        ],
        speaker: 'Sidapa',
        text: "... So this is your answer.",
        next: 'FC_b3'
    },

    FC_b3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: false }   
        ],
        speaker: 'Libulan',
        text: "I don't think I can hear anything anymore anyway.",
        next: 'FC_b4'
    },

    FC_b4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: true }   
        ],
        speaker: 'Narrator',
        text: "Sidapa closes his eyes.",
        next: 'FC_b5'
    },

    FC_b5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: false },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png', position: 'center', active: true }   
        ],
        speaker: 'Sidapa',
        text: "I understand.",
        next: 'FC_b6'
    },

    FC_b6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png',   position: 'center',  active: true }
       ],
        speaker: 'Bakunawa',
        text: "At last.",
        next: 'FC_b7'
    },

    FC_b7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: false }   
        ],
        speaker: 'Bathala',
        text: "If endings are what hurt us...",
        next: 'FC_b8'
    },

    FC_b8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "A pause",
        next: 'FC_b9'
    },

    FC_b9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: false }   
        ],
        speaker: 'Bathala',
        text: "... Then remove them all.",
        next: 'FC_b10'
    },

    FC_b10: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: true }   
        ],
        speaker: 'Narrator',
        text: "The system responds instantly.\nNot violently.\nNot emotionally.",
        next: 'FC_b11'
    },

    FC_b11: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: true }   
        ],
        speaker: 'Narrator',
        text: "Simply— obeying.",
        next: 'FC_b12'
    },

    FC_b12: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: true }   
        ],
        speaker: 'Narrator',
        text: "The moon does not shatter. \nIt disappears.",
        next: 'FC_b13'
    },

    FC_b13: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad.png', position: 'center', active: false }   
        ],
        speaker: 'Narrator',
        text: "Sidapa fades first.",
        next: 'FC_b14'
    },

    FC_b14: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: true },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Sad_Mouth.png', position: 'center', active: false }   
        ],
        speaker: 'Sidapa',
        text: "... So this is peace.",
        next: 'FC_b15'
    },

    FC_b15: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad.png',   position: 'right',  active: false }
        ],
        speaker: 'Narrator',
        text: "Libulan's sound vanishes next.",
        next: 'FC_b16'
    },

    FC_b16: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral.png',   position: 'left',  active: true },
            { name: 'Libulan',   img: 'Assets/Characters/Libulan/Libulan_Sad_Mouth.png',   position: 'right',  active: false }
        ],
        speaker: 'Libulan',
        text: "... That's quiet.",
        next: 'FC_b17'
    },

    FC_b17: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
	        { name: 'Bakunawa',   img: 'Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png',   position: 'center',  active: false }
       ],
        speaker: 'Narrator',
        text: "Bakunawa is gone.",
        next: 'FC_b18'
    },

    FC_b18: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Not defeated. \nNot alive.\nJust unnecessary",
        next: 'FC_b19'
    },

    FC_b19: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'center',  active: true }
        ],
        speaker: 'Narrator',
        text: "Bathala stands alone.\nIn a world where nothing ends.\nBecause nothing continues.",
        next: 'FC_b20'
    },

    FC_b20: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'center',  active: true }
        ],
        speaker: 'System:',
        text: "ENDING LOCKED — THE WORLD WITHOUT TOMORROW",
        next: ''
    },







    







    
    

















}



