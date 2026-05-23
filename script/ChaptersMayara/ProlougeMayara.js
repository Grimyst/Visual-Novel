const chapter1 = {
    prologue_start: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [],
        speaker: 'Narrator',
        text: "Rain poured endlessly against the train windows while the city outside dissolved into rivers of neon light, blurred advertisements, and reflections stretching endlessly across the glass like ghosts drifting through the storm. The station speakers crackled with distorted announcements no one seemed to listen to anymore, and every passing train sounded like distant thunder beneath the city.",
        next: 'scene1'
    },

    scene1: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [],
        speaker: 'System',
        text: "You arrived in the city three days ago.",
        next: 'scene2'
    },

    scene2: {
        bg: 'url("") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [],
        speaker: 'System',
        text: "A new apartment.",
        next: 'scene3'
    },

    scene3: {
        bg: 'url("") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [],
        speaker: 'System',
        text: "A new university.",
        next: 'scene4'
    },

    scene4: {
        bg: 'url("") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [],
        speaker: 'System',
        text: "A new life you still haven’t learned how to survive in.",
        next: 'scene5'
    },

    scene5: {
        bg: 'url("") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [],
        speaker: 'System',
        text: "But tonight feels different.",
        next: 'scene6'
    },
   
    scene6: {
        bg: 'url("") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [],
        speaker: 'System',
        text: "The air feels heavier somehow, like the city itself is waiting for something to happen.",
        next: 'scene7'
    },
   
    scene7: {
        bg: 'url("") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true}
        ],
        speaker: 'Bathala',
        text: "Why does this place feel so familiar…?",
        next: 'scene8'
    },

    scene8: {
        bg: 'url("") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false}
        ],
        speaker: 'System',
        text: "Somewhere nearby, a camera shutter clicked sharply through the noise of the rain.",
        next: 'scene9'
    },

    scene9: {
        bg: 'url("") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false}
        ],
        speaker: 'System',
        text: "A girl stood near the far end of the station platform, holding an old film camera close to her chest while moonlight reflected faintly in her silver eyes.",
        next: 'scene10'
    },
   
    scene10: {
        bg: 'url("") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false},
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true}
        ],
        speaker: 'Mayari',
        text: "Sorry. You just looked familiar for a second.",
        next: 'scene11'
    },
   
   
    scene11: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true },
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "Do we know each other?",
        next: 'scene12'
    },

    scene12: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "I don't think so. But it feels like I've seen you before. Maybe in a dream.",
        next: 'scene13'
    },

    scene13: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: false }
        ],
        speaker: 'System',
        text: "The train station lights suddenly flickered once.",
        next: 'scene13b'
    },

    scene13b: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: false }
        ],
        speaker: 'System',
        text: "Twice.",
        next: 'scene13c'
    },

    scene13c: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: false }
        ],
        speaker: 'System',
        text: "Then every light inside the station died at the exact same moment.",
        next: 'scene14'
    },

    scene14: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: false }
        ],
        speaker: 'System',
        text: "Passengers screamed as darkness swallowed the platform whole.",
        next: 'scene14b'
    },

    scene14b: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: true },
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: false }
        ],
        speaker: 'Bathala',
        text: "What the hell just happened?!",
        next: 'scene15'
    },

    scene15: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Sad_Mouth.png', position: 'right', active: false }
        ],
        speaker: 'System',
        text: "Mayari slowly looked upward toward the black ceiling beyond the dead lights. For the first time since meeting her, fear crossed her face.",
        next: 'scene15b'
    },

    scene15b: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Angry_Mouth.png', position: 'right', active: true }
        ],
        speaker: 'Mayari',
        text: "He's here.",
        next: 'scene15c'
    },

    scene15c: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Rainy Train Station',
        chars: [
            { name: 'Bathala', img: 'Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Mayari', img: 'Assets/Characters/Mayari/L_Mayari_Angry_Mouth.png', position: 'right', active: false }
        ],
        speaker: 'System',
        text: "A low growl echoed somewhere beyond the tracks, deep enough to shake the metal beneath your feet.",
        next: 'end'
    },

    end: {
        bg: 'black',
        location: '',
        chars: [],
        speaker: 'Narrator',
        text: "to be continued...",
        isEnd: true   
    },
}



/*
 
    scene16: {
        bg: 'url("bgs/Classroom.webp") center/cover no-repeat',
        location: 'DHVSU Hallway',
        chars: [
            { name: 'Kurt',   img: 'Characters/kurt.png',   position: 'left',  active: true }
        ],
        speaker: 'Kurt',

        isChoice: true,
        
        text: "Forgive Dustin?",
        choices: [
            { text: '"I forgive You Bro You just Doing it for your Lil Sis"', next: 'scene16_1_forgive' },
            { text: '"NAHHHH"', next: 'scene16_1_DoNotForgive'},
            { text: '"option 3"', next: 'scene16_1_DoNotForgive'}
        ]
    },

*/