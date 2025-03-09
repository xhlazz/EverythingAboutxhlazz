const musicFiles = [
    "https://raw.githubusercontent.com/xhlazz/Everything-About-xhlazz/main/spotidownloader.com%20-%20Leni%20(Crystal%20Castles%20vs%20GoodBooks)%20-%20GoodBooks.mp3",
    "https://raw.githubusercontent.com/xhlazz/Everything-About-xhlazz/main/spotidownloader.com%20-%20Tell%20me%20-%20novyhuman.mp3",
    "https://raw.githubusercontent.com/xhlazz/Everything-About-xhlazz/main/spotidownloader.com%20-%20TKIEROCONMIGO%20-%20Cesarvsthewrld.mp3",
    "https://raw.githubusercontent.com/xhlazz/Everything-About-xhlazz/main/spotidownloader.com%20-%20Sin%20Conexion%20-%20Young%20Dune.mp3",
    "https://raw.githubusercontent.com/xhlazz/Everything-About-xhlazz/main/spotidownloader.com%20-%20Show%20Me%20How%20-%20Men%20I%20Trust.mp3"
];

let currentMusicIndex = Math.floor(Math.random() * musicFiles.length);
const backgroundMusic = document.getElementById('background-music');

backgroundMusic.src = musicFiles[currentMusicIndex];
backgroundMusic.play();

function toggleMusic() {
    const toggleButton = document.getElementById('toggle-music');
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleButton.innerHTML = 'Stop Music';
    } else {
        backgroundMusic.pause();
        toggleButton.innerHTML = 'Play Music';
    }
}

function changeMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % musicFiles.length;
    backgroundMusic.src = musicFiles[currentMusicIndex];
    backgroundMusic.play();
    document.getElementById('toggle-music').innerHTML = 'Stop Music';
}

function toggleSection(sectionId, button) {
    const section = document.getElementById(sectionId);
    const arrow = button.querySelector('.arrow');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.classList.add('arrow-up');
    } else {
        section.style.display = 'none';
        arrow.classList.remove('arrow-up');
    }
}

function calculateAge(birthDate) {
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    const
