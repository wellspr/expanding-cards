const cards = document.querySelectorAll(".card");

cards[0].classList.add("expanded");
cards[0].querySelector(".card__heading").classList.add("show-heading");

const collapseAll = () => {
    cards.forEach(card => {
        card.classList.remove("expanded");
        card.querySelector(".card__heading").classList.remove("show-heading");
    });
};

cards.forEach(card => {
    card.addEventListener("click", e => {

        const isExpanded = e.target.classList.contains("expanded");
        const isCard = e.target.classList.contains("card");

        if (isCard && !isExpanded) {
            collapseAll();
            e.target.classList.add("expanded");
            setTimeout(() => {
                card.querySelector(".card__heading").classList.add("show-heading");
            }, 150);
        }
    });
});