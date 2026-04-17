const sections = document.querySelectorAll(".grid, .card-section");

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 0.7s ease";
});

function reveal() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);
