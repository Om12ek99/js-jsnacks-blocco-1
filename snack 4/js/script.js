const ospite = ["Marco", "Salomon", "Alex"];  //array

userName = prompt("inserisci il tuo nome");     //prompt inserimento dati

// comando for
for (i = 0; i < ospite.length; i ++) {   //.lenght legge la lunghezza dell'array
    // ciclo if
    if (userName === ospite[i]) {
        alert("Invito Valido"); 
        break;                             //stoppa il ciclo
    } else {
        alert("Ritorna a casa"); 
        break
    } 
}