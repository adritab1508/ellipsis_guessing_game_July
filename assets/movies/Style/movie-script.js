document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('flipped');
        });
    });
    regenerateMovie();
});

function regenerateMovie() {
    const movies = document.querySelectorAll('.card .front h3');
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex].parentNode.outerHTML;
    document.getElementById('randomMovie').innerHTML = randomMovie;
}
