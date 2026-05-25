const moon = document.getElementById('moonModal');
const hermit = document.getElementById('hermitModal');
const sun = document.getElementById('sunModal');
const world = document.getElementById('worldModal');
const death = document.getElementById('deathModal');
const hangedman = document.getElementById('hangedmanModal');
const fool = document.getElementById('foolModal');
const star = document.getElementById('starModal');
const tower = document.getElementById('towerModal');
const moonBtn = document.getElementById('openMoonBtn');
const hermitBtn = document.getElementById('openHermitBtn');
const sunBtn = document.getElementById('openSunBtn');
const worldBtn = document.getElementById('openWorldBtn');
const deathBtn = document.getElementById('openDeathBtn');
const hangedmanBtn = document.getElementById('openHangedManBtn');
const foolBtn = document.getElementById('openFoolBtn');
const starBtn = document.getElementById('openStarBtn');
const towerBtn = document.getElementById('openTowerBtn');
const closeMoonBtn = document.getElementById('closeMoonBtn');
const closeHermitBtn = document.getElementById('closeHermitBtn');
const closeSunBtn = document.getElementById('closeSunBtn');
const closeWorldBtn = document.getElementById('closeWorldBtn');
const closeDeathBtn = document.getElementById('closeDeathBtn');
const closeHangedManBtn = document.getElementById('closeHangedManBtn');
const closeFoolBtn = document.getElementById('closeFoolBtn');
const closeStarBtn = document.getElementById('closeStarBtn');
const closeTowerBtn = document.getElementById('closeTowerBtn');

// Moon Modal
moonBtn.addEventListener('click', () => {
    moon.showModal();
});
closeMoonBtn.addEventListener('click', () => {
    moon.close();
});
moon.addEventListener('click', (m) => {
    const moonDimensions = moon.getBoundingClientRect();
    if (
        m.clientX < moonDimensions.left ||
        m.clientX > moonDimensions.right ||
        m.clientY < moonDimensions.top ||
        m.clientY > moonDimensions.bottom
    ) {
        moon.close();
    }
});

// Hermit Modal
hermitBtn.addEventListener('click', () => {
    hermit.showModal();
});
closeHermitBtn.addEventListener('click', () => {
    hermit.close();
});
hermit.addEventListener('click', (h) => {
    const hermitDimensions = hermit.getBoundingClientRect();
    if (
        h.clientX < hermitDimensions.left ||
        h.clientX > hermitDimensions.right ||
        h.clientY < hermitDimensions.top ||
        h.clientY > hermitDimensions.bottom
    ) {
        hermit.close();
    }
});

// Sun Modal
sunBtn.addEventListener('click', () => {
    sun.showModal();
});
closeSunBtn.addEventListener('click', () => {
    sun.close();
});
sun.addEventListener('click', (s) => {
    const sunDimensions = sun.getBoundingClientRect();
    if (
        s.clientX < sunDimensions.left ||
        s.clientX > sunDimensions.right ||
        s.clientY < sunDimensions.top ||
        s.clientY > sunDimensions.bottom
    ) {
        sun.close();
    }
});

// World Modal
worldBtn.addEventListener('click', () => {
    world.showModal();
});
closeWorldBtn.addEventListener('click', () => {
    world.close();
});
world.addEventListener('click', (w) => {
    const worldDimensions = world.getBoundingClientRect();
    if (
        w.clientX < worldDimensions.left ||
        w.clientX > worldDimensions.right ||
        w.clientY < worldDimensions.top ||
        w.clientY > worldDimensions.bottom
    ) {
        world.close();
    }
});

// Death Modal
deathBtn.addEventListener('click', () => {
    death.showModal();
});
closeDeathBtn.addEventListener('click', () => {
    death.close();
});
death.addEventListener('click', (w) => {
    const deathDimensions = death.getBoundingClientRect();
    if (
        w.clientX < deathDimensions.left ||
        w.clientX > deathDimensions.right ||
        w.clientY < deathDimensions.top ||
        w.clientY > deathDimensions.bottom
    ) {
        death.close();
    }
});

// HangedMan Modal
hangedmanBtn.addEventListener('click', () => {
    hangedman.showModal();
});
closeHangedManBtn.addEventListener('click', () => {
    hangedman.close();
});
hangedman.addEventListener('click', (hm) => {
    const hangedmanDimensions = hangedman.getBoundingClientRect();
    if (
        hm.clientX < hangedmanDimensions.left ||
        hm.clientX > hangedmanDimensions.right ||
        hm.clientY < hangedmanDimensions.top ||
        hm.clientY > hangedmanDimensions.bottom
    ) {
        hangedman.close();
    }
});

// Fool Modal
foolBtn.addEventListener('click', () => {
    fool.showModal();
});
closeFoolBtn.addEventListener('click', () => {
    fool.close();
});
fool.addEventListener('click', (f) => {
    const foolDimensions = fool.getBoundingClientRect();
    if (
        f.clientX < foolDimensions.left ||
        f.clientX > foolDimensions.right ||
        f.clientY < foolDimensions.top ||
        f.clientY > foolDimensions.bottom
    ) {
        fool.close();
    }
});

// Star Modal
starBtn.addEventListener('click', () => {
    star.showModal();
});
closeStarBtn.addEventListener('click', () => {
    star.close();
});
star.addEventListener('click', (s) => {
    const starDimensions = star.getBoundingClientRect();
    if (
        s.clientX < starDimensions.left ||
        s.clientX > starDimensions.right ||
        s.clientY < starDimensions.top ||
        s.clientY > starDimensions.bottom
    ) {
        star.close();
    }
});

// Tower Modal
towerBtn.addEventListener('click', () => {
    tower.showModal();
});
closeTowerBtn.addEventListener('click', () => {
    tower.close();
});
tower.addEventListener('click', (t) => {
    const towerDimensions = tower.getBoundingClientRect();
    if (
        t.clientX < towerDimensions.left ||
        t.clientX > towerDimensions.right ||
        t.clientY < towerDimensions.top ||
        t.clientY > towerDimensions.bottom
    ) {
        tower.close();
    }
});