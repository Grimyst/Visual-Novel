
const prologue = {
scene_darkroom_start: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [],
    speaker: 'Narrator',
    text: "The photography darkroom smelled faintly of chemicals, dust, and wet paper while rows of freshly developed photographs swayed gently from hanging wires overhead. Most of the pictures showed the moon from impossible angles — full moons, crescent moons, eclipses, and skies empty except for pale silver light.",
    next: 'scene_darkroom_1'
},

scene_darkroom_1: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [],
    speaker: 'Narrator',
    text: "Rain tapped softly against the tiny windows near the ceiling.",
    next: 'scene_darkroom_2'
},

scene_darkroom_2: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: true },
        { name: 'Mayari',  img: '', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "So this is where you disappear during lunch breaks.",
    next: 'scene_darkroom_3'
},

scene_darkroom_3: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "You make it sound suspicious.",
    next: 'scene_darkroom_4'
},

scene_darkroom_4: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: true },
        { name: 'Mayari',  img: '', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "A hidden darkroom full of moon pictures is at least a little suspicious.",
    next: 'scene_darkroom_5'
},

scene_darkroom_5: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari laughed quietly under her breath while adjusting one of the hanging photographs.",
    next: 'scene_darkroom_6'
},

scene_darkroom_6: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: true },
        { name: 'Mayari',  img: '', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "These are incredible.",
    next: 'scene_darkroom_7'
},

scene_darkroom_7: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "Most people think they're repetitive.",
    next: 'scene_darkroom_8'
},

scene_darkroom_8: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: true },
        { name: 'Mayari',  img: '', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "They don't feel repetitive.",
    next: 'scene_darkroom_9'
},

scene_darkroom_9: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: true },
        { name: 'Mayari',  img: '', position: 'right', active: false }
    ],
    speaker: 'Bathala',
    text: "They feel emotional. Lonely, even.",
    next: 'scene_darkroom_10'
},

scene_darkroom_10: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari paused for a moment before answering.",
    next: 'scene_darkroom_11'
},

scene_darkroom_11: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: true }
    ],
    speaker: 'Mayari',
    text: "Maybe that's because the moon always looks lonelier when people stop noticing it.",
    next: 'scene_darkroom_12'
},

scene_darkroom_12: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "A sudden gust of freezing wind swept through the room. The hanging photographs began swaying violently despite the windows being closed.",
    next: 'scene_darkroom_13'
},

scene_darkroom_13: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: false }
    ],
    speaker: 'Narrator',
    text: "The lights overhead flickered hard enough to plunge the room into darkness between flashes.",
    next: 'scene_darkroom_14'
},

scene_darkroom_14: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "Still talking like you belong to the sky?",
    next: 'scene_darkroom_15'
},

scene_darkroom_15: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: true },
        { name: 'Mayari',  img: '', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "Bathala immediately turned toward the voice. A tall figure stood near the doorway, half-hidden in darkness. His eyes glowed faintly gold beneath the flickering lights.",
    next: 'scene_darkroom_16'
},

scene_darkroom_16: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: true },
        { name: 'Mayari',  img: '', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Bathala',
    text: "Who are you?",
    next: 'scene_darkroom_17'
},

scene_darkroom_17: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "Someone who remembers her better than she remembers herself.",
    next: 'scene_darkroom_18'
},

scene_darkroom_18: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: true },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "Mayari's expression suddenly hardened.",
    next: 'scene_darkroom_19'
},

scene_darkroom_19: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: true },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Mayari',
    text: "You shouldn't be here.",
    next: 'scene_darkroom_20'
},

scene_darkroom_20: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: true }
    ],
    speaker: 'Bakunawa',
    text: "And yet you continue pretending this life can last.",
    next: 'scene_darkroom_21'
},

scene_darkroom_21: {
    bg: 'url("") center/cover no-repeat',
    location: 'Photography Darkroom',
    chars: [
        { name: 'Bathala', img: '', position: 'left', active: false },
        { name: 'Mayari',  img: '', position: 'right', active: false },
        { name: 'Bakunawa', img: '', position: 'center', active: false }
    ],
    speaker: 'Narrator',
    text: "The room darkened again. For a brief second, something enormous moved behind him in the shadows — something serpentine. Something with glowing eyes.",
    next: 'end'
},

}