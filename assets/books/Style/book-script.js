document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('flipped');
        });
    });
    regenerateBook();
});

function regenerateBook() {
    const books = document.querySelectorAll('.card .front h3');
    const randomIndex = Math.floor(Math.random() * books.length);
    const randomBook = books[randomIndex].parentNode.outerHTML;
    document.getElementById('randomBook').innerHTML = randomBook;
}
