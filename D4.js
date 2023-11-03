/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2){
     let formula = l1*l2
    return formula
}
let l1 = 4
let l2 = 2
let areaRettangolo = area(l1,l2)
console.log("l'area è " + areaRettangolo )


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b){
let sommaAB = a + b
if (a != b){
    return sommaAB
}else{
    return sommaAB*3
}

 
}
let a = 10
let b = 10
let c = crazySum(a, b)
console.log(c)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero){
let arrayDiFunzione = Math.abs(numero - 19)
if (numero<19){
    return arrayDiFunzione
}else{
    return arrayDiFunzione*3
}
}
const numero = 32
const risultato = crazyDiff(numero)
console.log(risultato)
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
if(n >=20 && n <=100 || n===400){
return true
}else{
    return false
}
}
const n = 47
const controllo = boundary(n)
console.log(controllo)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
let concatenazione = "EPICODE"
function epify(casualString){
    if (casualString.startsWith(concatenazione)){
        return casualString

    }else {
        return concatenazione +casualString
    }
}
    
let provaStringa = epify(" dice ciao amici")
console.log(provaStringa)
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(number){
if (number <= 0 ){
    return "Only positive values are accepted"
}else if(number %3 ===0 || number %7 ===0){
    return true

}else{
    return false
}


}
let number = 49
let testMultiplo = check3and7(number)
console.log(testMultiplo)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/*function reverseString(inputString){
   return  inputString.split(' ').reverse().join(' ')

}
let stringaDiProva = "Ciao a tutti i webdev!"
let inversioneStringa = reverseString(stringaDiProva)
console.log(stringaDiProva)/*

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/*function upperFirst(string){


}/*

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string){
    return string.slice(1,-1)
}
let tryString = cutString("ciao")
console.log(tryString)
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(number){
    return Math.floor(Math.random(number)*11)
}
let x = [1,2,3,4]
 let numeriCasuali = giveMeRandom(x)
console.log(numeriCasuali)