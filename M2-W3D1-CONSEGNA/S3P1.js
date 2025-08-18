/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

// function crazySum(num1, num2) {
//     if (num1 === num2) {
//         let risultato = (num1 + num2) * 3
//         console.log(risultato)
//     } else {
//         let risultato = num1 + num2
//         console.log(risultato)
//     }
// }

// crazySum(5,4)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

// function boundary (num) {
//     if (num >= 20 && num <= 100 || num === 400) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(boundary(100))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

// function reverseString (string) {
    
//     let result = string
//     .split("")
//     .reverse()
//     .join("")    

//     return result
// }

// console.log(reverseString("epicode"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

// function upperFirst (s) {
    
//     let sArray = s.split(" ")

    
//     for (word of sArray) {
    
//     let result = word
//     .charAt(0)
//     .toUpperCase() + word.slice(1)
//     console.log(result)
//     }
// }

// upperFirst("uno due tre") 


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

// function giveMeRandom (n) {

//     let randomArray = []

//     for (i = 1; i <= n; i++) {

//          let randomNumber = Math.random() * 10 

//          let randomNumberInt = Math.floor(randomNumber)
         
//          randomArray.push(randomNumberInt)
        
//     }

//     return randomArray

// }

// console.log(giveMeRandom(5))


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

// function area (l1, l2) {
//     risultato = l1 * l2
//     return risultato
// }
// console.log(area(4,4))



/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

// function crazyDiff (n) {

//     result = n - 19
//     if (result > 19) {
//         result = result * 3
//         return result
//     } else {
//         return result
//     }

// }

// console.log(crazyDiff(1019))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/


// function codify (string) {

//     let newString
//     if (string.startsWith("code")) {

//         return string
//     } else {

//         newString = "code" + string

//         return newString
//     }

// }

// console.log(codify("codesdadwadawd"))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/


// function check3and7 (n) {

//     if (n > 0 && n %3 === 0 || n %7 === 0) {
//         return true

//     } else if (n <= 0) { 
//         return `metti un numero intero positivo`
//     } else {
//         return false
//     }

// }

// console.log(check3and7(-1))


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

// function cutString (string) {

//     totalLetters = string.split("")

//     totalLetters.pop()
//     totalLetters.shift()

//     newString = totalLetters.toString()
    
//     newString2 = newString.replaceAll(",","")


//     return newString2

// }
// console.log(cutString("provaprovaprova"))