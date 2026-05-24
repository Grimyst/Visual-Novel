const scenes = {
    Chapter1_start: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaPrologue.png") center/cover no-repeat',
        location: 'Hospital',
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
        chars: [],
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
        chars: [],
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
        chars: [],
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
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry.png',   position: 'left',  active: false },
            { name: 'Sidapa', img: 'Assets/Characters/Sidapa/Sidapa_Neutral.png', position: 'right', active: false }   
        ],
        speaker: 'Narrator',
        text: "Bakunawa looked toward Sidapa. Then toward Bathala.",
        next: 'ch1_31'
    },

    ch1_31: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [],
        speaker: 'Bakunawa',
        text: "So this is the one observing the system.",
        next: 'ch1_32'
    },

    ch1_32: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Neutral_Mouth.png',   position: 'left',  active: false }
        ],
        speaker: 'Bathala',
        text: "... The what?",
        next: 'ch1_33'
    },

    ch1_33: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [],
        speaker: 'Bakunawa',
        text: "The thing pretending your choices matter.",
        next: 'ch1_34'
    },

    ch1_34: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [],
        speaker: 'Narrator',
        text: "The walls around the club trembled softly. For one horrifying second—something enormous moved behind Bakunawa's shadow. A massive serpent shape coiling endlessly through darkness beneath the city.",
        next: 'ch1_35'
    },

    ch1_35: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }
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
        chars: [],
        speaker: 'Narrator',
        text: "Bakunawa laughs softly.",
        next: 'ch1_40a'
    },

    ch1_40a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [],
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
        chars: [],
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
        chars: [],
        speaker: 'Narrator',
        text: "Bakunawa's golden eyes narrow slightly.",
        next: 'ch1_39b'
    },

    ch1_39b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [],
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
        chars: [],
        speaker: 'Narrator',
        text: "Bakunawa slowly walks beneath the flickering lights",
        next: 'ch1_42b'
    },

    ch1_42b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [],
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
        chars: [],
        speaker: 'Narrator',
        text: "Bakunawa smiles coldly.",
        next: 'ch1_45b'
    },

    ch1_45b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [],
        speaker: 'Bakunawa',
        text: "I devour things that refuse to end.",
        next: 'ch1_46b'
    },

    ch1_46b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter1.png") center/cover no-repeat',
        location: 'UNDERGROUND CLUB',
        chars: [],
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
        chars: [],
        speaker: 'Narrator',
        text: "Bakunawa walks calmly ahead of Bathala. Massive serpent shadows move silently along the tunnel walls.",
        next: 'ch2b_2'
    },
    
    ch2b_2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Angry_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "You talk like humanity disappointed you.",
        next: 'ch2b_3'
    },

    ch2b_3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [],
        speaker: 'Bakunawa',
        text: "Because it did.",
        next: 'ch2b_4'
    },

    ch2b_4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [],
        speaker: 'Narrator',
        text: "His voice echoes unnaturally",
        next: 'ch2b_5'
    },

    ch2b_5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [],
        speaker: 'Bakunawa',
        text: "Humans fear endings so much they destroy each other trying to avoid them.",
        next: 'ch2b_6'
    },

    ch2b_6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [],
        speaker: 'Bakunawa',
        text: "Sidapa watches death. Libulan numbs pain. But neither changes anything.",
        next: 'ch2b_7'
    },

    ch2b_7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [],
        speaker: 'Narrator',
        text: "The tunnel suddenly shakes violently. A massive golden eye opens within the darkness beneath the rails.",
        next: 'ch2b_8'
    },

    ch2b_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [],
        speaker: 'Bakunawa',
        text: "I will.",
        next: 'ch2b_9'
    },

    ch2b_9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: true }
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
        chars: [],
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
        chars: [],
        speaker: 'Narrator',
        text: "The golden eye narrows slowly.",
        next: 'ch2b_15a'
    },

    ch2b_15a: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [],
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
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: false }  
        ],
        speaker: 'Narrator',
        text: "Silence fills the tunnel. Bakunawa slowly smiles.",
        next: 'ch2b_13b'
    },

    ch2b_13b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [],
        speaker: 'Bakunawa',
        text: "You finally understand.",
        next: 'ch2b_14b'
    },

    ch2b_14b: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter2B.png") center/cover no-repeat',
        location: 'THE TRAIN TUNNELS',
        chars: [],
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
        chars: [],
        speaker: 'Narrator',
        text: "Bakunawa's massive serpent form coils endlessly around the eclipsed moon above the city.",
        next: 'ch3a_4'
    },

    ch3a_4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapter3A.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
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
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad.png',   position: 'left',  active: true }
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
        chars: [],
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
        chars: [],
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
        chars: [],
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
        chars: [],
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
        text: "Bathala desperately looks between them.",
        next: 'FCH_5'
    },

    FCH_5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [
            { name: 'Bathala',   img: 'Assets/Characters/Bathala/Bathala_Sad_Mouth.png',   position: 'left',  active: true }
        ],
        speaker: 'Bathala',
        text: "There has to be another way.",
        next: 'FCH_6'
    },

    FCH_6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Bakunawa',
        text: "There never was.",
        next: 'FCH_7'
    },

    FCH_7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "The moon shatters again. \nSuddenly— the entire world freezes.",
        next: 'FCH_8'
    },

    FCH_8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Rain stops midair.\nThe ocean becomes still. \nEven sound disappears.",
        next: 'FCH_9'
    },

    FCH_9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "A glowing system window appears before Bathala.",
        next: 'FCH_10'
    },

    FCH_10: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'SYSTEM ALERT',
        text: "FINAL SYNCHRONIZATION ACTIVATED\nOutcome will determine ending authority.",
        next: 'FCH_11'
    },

    FCH_11: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "The system screen flickers violently.",
        next: 'FCH_*'
    },

    //at this point rock, paper, scissors is played

    win_1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'System:',
        text: "Synchronization successful. \nFinal choice unlocked.",
        next: 'win_2'
    },

    win_2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Time begins moving again.",
        next: 'win_3'
    },

    win_3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Bakunawa rises toward the eclipsed moon while darkness spreads endlessly across the heavens.",
        next: 'win_4'
    },

    win_4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Bathala',
        
        isChoice: true,
        
        text: "",
        choices: [
            { text: '"Preserve the endings"', next: 'FC_a1' },
            { text: '"Erase the endings"', next: 'FC_b1' },
        ]
    },

    FC_a1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Bathala steps beside Sidapa and Libulan.",
        next: 'FC_a2'
    },

    FC_a2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Bathala',
        text: "Pain matter because life matters.\nEndings matter because people existed.",
        next: 'FC_a3'
    },

    FC_a3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Sidapa closes his eyes silently.\nLibulan smiles weakly.",
        next: 'FC_a4'
    },

    FC_a4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Moonlight erupts across the city.\nBakunawa's serpent form screams as cracks of silver light spread across the eclipse.",
        next: 'FC_a5'
    },

    FC_a5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "The frozen city begins moving again.\nRain falls softly once more.",
        next: 'FC_a6'
    },

    FC_a6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "The silver countdowns above humanity stabilize.\nBakunawa slowly dissolves into darkness beneath the sea.",
        next: 'FC_a7'
    },

    FC_a7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Bakunawa',
        text: "... So humanity chooses suffering again.",
        next: 'FC_a8'
    },

    FC_a8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Bathala',
        text: "No...\nHumanity chooses living",
        next: 'FC_a9'
    },

    FC_a9: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'System:',
        text: "Ending Unlocked: THE NIGHT THAT KEPT MOVING",
        next: ''
    },
//Good ending

    FC_b1: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Bathala slowly lowers his hand.",
        next: 'FC_b2'
    },

    FC_b2: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Bathala',
        text: "... Maybe people are tired of losing things.",
        next: 'FC_b3'
    },

    FC_b3: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Sidapa freezes silently.\nLibulan quietly looks away.",
        next: 'FC_b4'
    },

    FC_b4: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Bakunawa closes his eyes peacefully.\nThe eclipse completely devours the moon.",
        next: 'FC_b5'
    },

    FC_b5: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "Every silver countdown disappears forever.\nThe city becomes perfectly still.",
        next: 'FC_b6'
    },

    FC_b6: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "No pain.\nNo grief.",
        next: 'FC_b7'
    },

    FC_b7: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'Narrator',
        text: "No endings.\nNo life.",
        next: 'FC_b8'
    },

    FC_b8: {
        bg: 'url("Assets/Background/VisNovBG/SidapaBG/SidapaChapterFinal.png") center/cover no-repeat',
        location: 'METRO MANILA',
        chars: [],
        speaker: 'System:',
        text: "Ending Unlocked: THE WORLD WITHOUT TOMORROW",
        next: ''
    },
    









    







    
    

















}



