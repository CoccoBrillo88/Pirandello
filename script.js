const sections = document.querySelectorAll(".grid, .card-section");

/* stato iniziale */
sections.forEach((sec, index) => {
    if (index === 0) {
        // PRIMA SEZIONE VISIBILE SUBITO
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
    } else {
        sec.style.opacity = 0;
        sec.style.transform = "translateY(40px)";
    }

    sec.style.transition = "all 0.7s ease";
});

/* funzione animazione */
function revealOnScroll() {
    sections.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (pos < trigger) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
}

/* IMPORTANTE: attiva subito */
window.addEventListener("load", revealOnScroll);

/* scroll */
window.addEventListener("scroll", revealOnScroll);
