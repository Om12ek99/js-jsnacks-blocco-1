const oddNumb = [];       //array vyoto

// ciclo for di controllo se il numero è dispari
for (i = 0; i < 6; i++) {
    userNumber = parseInt(prompt("inserisci un numero"))
    if (userNumber % 2 !== 0) {
        oddNumb.push(userNumber);        //comado di push che inserisce il valore corretto nell'array
    }
}
// comando console
alert(`i numeri dispari inseriti sono ${oddNumb}`); 