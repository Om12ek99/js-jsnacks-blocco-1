let sum = 0;

// ciclo for
for (let i = 0; i < 10; i++) {
    const userNumb = parseInt(prompt(`inserisci il ${i +1} numero`));
    sum = userNumb + sum;   //somma dei numeri
}
// comando console
console.log(sum);