const cards = document.querySelectorAll(".card");

cards[0].classList.add("expanded");

const collapseAll = () => {
    cards.forEach(card => {
        card.classList.remove("expanded");
        card.querySelector(".card__heading").classList.remove("show-heading");
    });
};

cards.forEach(card => {
    card.addEventListener("click", e => {
        collapseAll();
        e.target.classList.add("expanded");
        setTimeout(() => {
            card.querySelector(".card__heading").classList.add("show-heading");
        }, 150);
    });
});