// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

let somma = 0;
// for (i = 0; i < 5; i++) {
//  somma = somma + parseInt(prompt("inserisci un numero"));
// }

// console.log("la somma è: " + somma);

let i = 0;
while (i < 5) {
 somma = somma + parseInt(prompt("inserisci un numero"));
 i++;
}

console.log("la somma è: " + somma);
