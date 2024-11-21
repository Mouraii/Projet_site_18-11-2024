document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner tous les boutons ou éléments interactifs pour déclencher le scroll
    const scrollButton = document.getElementById("scrollNext");

    scrollButton.addEventListener("click", function () {
        // Trouver la section actuellement visible
        const sections = Array.from(document.querySelectorAll("article"));
        const currentScroll = window.scrollY + window.innerHeight / 2; // Position actuelle avec un peu de marge
        let nextSection = null;

        for (let section of sections) {
            const sectionTop = section.offsetTop;
            if (sectionTop > currentScroll) {
                nextSection = section;
                break;
            }
        }

        // Si une section suivante existe, scroller vers elle
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});