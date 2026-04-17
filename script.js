const sections = document.querySelectorAll(".grid, .card-section");

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        if (pos < window.innerHeight - 80) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});
