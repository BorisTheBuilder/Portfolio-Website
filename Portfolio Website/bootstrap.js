window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const cards = document.querySelectorAll(".project-card");
    const prevBtn = document.getElementById("prev-button");
    const nextBtn = document.getElementById("next-button");

    let current = 0;

    function showCard(i) {
        cards.forEach(function(card) {
            card.style.display = "none";
        });
        cards[i].style.display = "flex";
    }

    function goNext() {
        current = (current + 1) % cards.length;
        showCard(current);
    }

    function goPrev() {
        current = (current - 1 + cards.length) % cards.length;
        showCard(current);
    }

    nextBtn.addEventListener("click", goNext);
    prevBtn.addEventListener("click", goPrev);

    showCard(current);
}