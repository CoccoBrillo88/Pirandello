// Funzione per mostrare la sezione desiderata e nascondere le altre
function showSection(sectionId) {
    // Seleziona tutte le sezioni che contengono gli appunti
    const sections = document.querySelectorAll('.content-section');
    
    // Itera attraverso le sezioni
    sections.forEach(section => {
        // Se l'id della sezione corrisponde a quello cliccato, togli la classe 'hidden'
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            // Altrimenti, aggiungi la classe 'hidden' per nasconderla
            section.classList.add('hidden');
        }
    });
}
