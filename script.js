function showColumn(colNumber) {
    // 1. Rimuovi la classe 'active' da tutte le colonne
    const columns = document.querySelectorAll('.content-col');
    columns.forEach(col => col.classList.remove('active'));

    // 2. Rimuovi la classe 'active' da tutti i bottoni ovali
    const buttons = document.querySelectorAll('.oval-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 3. Aggiungi la classe 'active' solo alla colonna e al bottone cliccato
    const activeCol = document.getElementById('col' + colNumber);
    activeCol.classList.add('active');
    
    // Attiva visivamente anche il bottone corrispondente (l'indice dell'array parte da 0)
    buttons[colNumber - 1].classList.add('active');
}
