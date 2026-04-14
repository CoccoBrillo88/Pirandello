window.addEventListener("load", () => {
    const cards = document.getElementById("cards");

    setTimeout(() => {
        cards.classList.remove("hidden");
        cards.classList.add("show");
    }, 800);
});
