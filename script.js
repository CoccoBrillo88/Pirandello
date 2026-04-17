const sections = document.querySelectorAll(".grid, .card-section");

/* stato iniziale */
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "all 0.6s ease";
});

/* funzione */
function reveal() {
    sections.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        if (pos < window.innerHeight - 80) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
}

/* subito visibile */
window.onload = reveal;

/* scroll */
window.addEventListener("scroll", reveal);
