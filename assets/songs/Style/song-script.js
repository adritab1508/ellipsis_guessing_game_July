document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('flipped');
        });
    });
    regenerateSong();
});

function regenerateSong() {
    const songs = document.querySelectorAll('.card .front h3');
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex].parentNode.outerHTML;
    document.getElementById('randomSong').innerHTML = randomSong;
}
