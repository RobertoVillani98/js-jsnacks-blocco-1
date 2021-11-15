// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const parola1 = prompt("inserisci la prima parola");
const parola2 = prompt("inserisci la seconda parola");
if (parola1.length > parola2.length) {
 console.log(parola1);
} else if (parola1.length < parola2.length) {
 console.log(parola2);
} else {
 console.log(parola1 + " " + parola2);
}
