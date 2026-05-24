chapter3b_hanan = {
    chapter3b_hanan_start: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        bgm: 'Assets/Songs/HananST.mp3',
        chars: [],
        speaker: 'Narrator',
        text: "The sunrise disappears completely.",
        next: 'chapter3b_hanan_scene1'
    }, 

    chapter3b_hanan_scene1: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [],
        speaker: 'Narrator',
        text: "Darkness floods Manila while every clock inside the city stops forever.",
        next: 'chapter3b_hanan_scene2'
    }, 
    
    chapter3b_hanan_scene2: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [],
        speaker: 'Narrator',
        text: "No dawn.",
        next: 'chapter3b_hanan_scene3'
    }, 

    chapter3b_hanan_scene3: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [],
        speaker: 'Narrator',
        text: "No movement.",
        next: 'chapter3b_hanan_scene4'
    }, 

    chapter3b_hanan_scene4: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [],
        speaker: 'Narrator',
        text: "No tomorrow.",
        next: 'chapter3b_hanan_scene5'
    }, 

    chapter3b_hanan_scene5: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [],
        speaker: 'Narrator',
        text: "Hanan quietly stands beneath the dead sky while the serpent form of Bakunawa coils endlessly overhead.",
        next: 'chapter3b_hanan_scene6'
    }, 

    chapter3b_hanan_scene6: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [],
        speaker: 'Narrator',
        text: "For the first time—",
        next: 'chapter3b_hanan_scene7'
    }, 

    chapter3b_hanan_scene7: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [],
        speaker: 'Narrator',
        text: "she stops smiling.",
        next: 'chapter3b_hanan_scene8'
    }, 

    chapter3b_hanan_scene8: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [
            { name: 'Bathala', img: '../Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Hanan', img: '../Assets/Characters/Hanan/Hanan_Sad.png', position: 'right', active: false } ,
            { name: 'Bakunawa', img: '../Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral_Mouth.png', position: 'center', active: true }
        ],
        speaker: 'Bakunawa',
        text: "Eventually humanity grows tired of starting over.",
        next: 'chapter3b_hanan_scene9'
    }, 

    chapter3b_hanan_scene9: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [
            { name: 'Bathala', img: '../Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Hanan', img: '../Assets/Characters/Hanan/Hanan_Sad.png', position: 'right', active: false } ,
            { name: 'Bakunawa', img: '../Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: false }
        ],
        speaker: 'Narrator',
        text: "The city remains perfectly still.",
        next: 'chapter3b_hanan_scene10'
    }, 
    
    chapter3b_hanan_scene10: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [
            { name: 'Bathala', img: '../Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Hanan', img: '../Assets/Characters/Hanan/Hanan_Sad.png', position: 'right', active: false } ,
            { name: 'Bakunawa', img: '../Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: false }
        ],
        speaker: 'Narrator',
        text: "And Hanan slowly realizes—",
        next: 'chapter3b_hanan_scene11'
    }, 

    chapter3b_hanan_scene11: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [
            { name: 'Bathala', img: '../Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Hanan', img: '../Assets/Characters/Hanan/Hanan_Sad.png', position: 'right', active: false } ,
            { name: 'Bakunawa', img: '../Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: false }
        ],
        speaker: 'Narrator',
        text: "without beginnings—",
        next: 'chapter3b_hanan_scene12'
    }, 

    chapter3b_hanan_scene12: {
        bg: 'url("../Assets/images/white=grid-patterns.jpg") center/cover no-repeat',
        location: 'Train Station',
        chars: [
            { name: 'Bathala', img: '../Assets/Characters/Bathala/Bathala_Neutral.png', position: 'left', active: false },
            { name: 'Hanan', img: '../Assets/Characters/Hanan/Hanan_Sad.png', position: 'right', active: false } ,
            { name: 'Bakunawa', img: '../Assets/Characters/Bakunawa/Bakunawa/Bakunawa_Neutral.png', position: 'center', active: false }
        ],
        speaker: 'Narrator',
        text: "people stop hoping entirely.",
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