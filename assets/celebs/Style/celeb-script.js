document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('flipped');
        });
    });
    regenerateCeleb();
});

function regenerateCeleb() {
    const celebs = document.querySelectorAll('.card .front h3');
    const randomIndex = Math.floor(Math.random() * celebs.length);
    const randomCeleb = celebs[randomIndex].parentNode.outerHTML;
    document.getElementById('randomCeleb').innerHTML = randomCeleb;
}
