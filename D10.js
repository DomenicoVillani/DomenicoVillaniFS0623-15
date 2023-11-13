/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sommaDice = 0



const var1=10
const var2=20
let sum = var1+var2
console.log("la somma tra 10 e 20 e': "+sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21) ;
console.log("sto estrande un numero casuale da 0 a 20 per te, il numero estratto e': "+random)  

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Domenico", 
  surname: "Villani", 
  age: 24
}
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["javaScript"]
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Java")
me.skills.push("c")
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice(){
  const random = Math.floor(Math.random() * (7-1)) + 1 ;
  sommaDice += random
  console.log(sommaDice)
  const risultato = document.createElement("p")
  risultato.innerHTML = "hai lanciato un dado a 6 facce... e' uscito il numero: " +random
  const node = document.getElementById("dado")
  node.appendChild(risultato)
  return random
}

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(){
  const num1=parseInt(document.getElementById("numero1").value)
  const num2=parseInt(document.getElementById("numero2").value)
  let risultato
  if(num1 > num2){
    risultato = "il numero maggiore e': " +num1
  }else if(num2 > num1){
    risultato = "il numero maggiore e': " +num2
  }else{
    risultato = "i due numeri sono uguali"
  }
  const output = document.createElement("p")
  output.innerHTML = risultato
  const node = document.getElementById("confrontoNumeri")
  node.appendChild(output)
  return risultato
}

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(){
  const stringaDaDividere = document.getElementById("stringaInput").value
  const arraySplit = stringaDaDividere.split(" ")
  const node = document.getElementById("stringSplit")
  for(let i = 0; i<arraySplit.length ; i++){
    const output = document.createElement("p")
    output.innerHTML = arraySplit[i]
    node.appendChild(output)
  }
  console.log(arraySplit)
  return arraySplit
}

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOneT(){
  const stringaDaDividere = document.getElementById("stringaCut").value
  const result = stringaDaDividere.slice(1)
  const node = document.getElementById("cutString")
  const output = document.createElement("p")
  output.innerHTML = result
  node.appendChild(output)
}
function deleteOneF(){
  const stringaDaDividere = document.getElementById("stringaCut").value
  const result = stringaDaDividere.slice(0,-1)
  const node = document.getElementById("cutString")
  const output = document.createElement("p")
  output.innerHTML = result
  node.appendChild(output)
}

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(){
  const stringaNoNumeri = document.getElementById("soloString").value
  const result = stringaNoNumeri.replace(/[0-9]/g, '')
  const node = document.getElementById("onlyString")
  const output = document.createElement("p")
  output.innerHTML = result
  node.appendChild(output)
}

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(){
  const emailOrNotEmail = document.getElementById("emailOrNot").value
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let result
  if(emailOrNotEmail.match(mailFormat)){
    result = "Email valida"
    const node = document.getElementById("isEmail")
    const output = document.createElement("p")
    output.innerHTML = result
    node.appendChild(output)
    return true
  }else{
    result = "Email non valida"
    const node = document.getElementById("isEmail")
    const output = document.createElement("p")
    output.innerHTML = result
    node.appendChild(output)
    return false
  }
}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt(){
  const giornoDiOggi = new Date()
  const giorno = giornoDiOggi.getDay()
  const giorniSettimana = ["Domenica","Lunedi'","martedi'","mercoledi'","giovedi'","venerdi'","sabato"]
  let result
  for(let i=0; i<giorniSettimana.length; i++){
    if(giorno === i)
    {
      result = "oggi e' " +giorniSettimana[i]
    }
  }
    const node = document.getElementById("giornoDellaSettimana")
    const output = document.createElement("p")
    output.innerHTML = result
    node.appendChild(output)
}

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(){
  const numTiri=parseInt(document.getElementById("numeroTiri").value)
  let result
  for(let i=0; i<numTiri ; i++){
    dice()
  }
  const node = document.getElementById("tiraNVolteDado")
  const output = document.createElement("p")
  result = "la somma dei tuoi tiri e' "+sommaDice
  output.innerHTML = result
  node.appendChild(output)
}

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(){
  const giorno = document.getElementById("calcData").value
  const dataScelta = new Date(giorno)
  const giornoDiOggi = new Date()
  let differenzaMillSecondi =  giornoDiOggi - dataScelta
  let MillInADay = 1000 * 60 * 60 * 24
  let diffGiorni = Math.floor(differenzaMillSecondi / MillInADay)
  let result = "sono passati " + diffGiorni + " giorni da oggi"
  const node = document.getElementById("giorniPassati")
  const output = document.createElement("p")
  output.innerHTML = result
  node.appendChild(output)
  return diffGiorni
}


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(){
  const giorno = document.getElementById("calcCompl").value
  const dataScelta = new Date(giorno)
  const giornoDiOggi = new Date()                        
  let result
  const giornoCompleanno = giornoDiOggi.getDate()
  const giornoSceltoComp = dataScelta.getDate()
  const meseCompleanno = giornoDiOggi.getMonth()
  const meseCompleannoScelto = dataScelta.getMonth()
  if(giornoCompleanno === giornoSceltoComp){  
    if(meseCompleanno === meseCompleannoScelto){
      result ="TANTI AUGURIII!!!"
    }else{
      result ="Mi dispiace oggi non e' il tuo compleanno"
    }       
  }else{
    result ="Mi dispiace oggi non e' il tuo compleanno"
  }
  const node = document.getElementById("compleanno")
  const output = document.createElement("p")
  output.innerHTML = result
  node.appendChild(output)
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const soccerPlayer = {
  name: "Paulo ", 
  surname: "Dybala ", 
  age: 29,
  team: "Roma",
  number: 21,
  gol: 172
}
const stringDelete = "age"
function deleteProp(oggetto1,stringa1){
  console.log(oggetto1)
  console.log(stringa1)
  delete oggetto1[stringa1]
  console.log(oggetto1)
}
deleteProp(soccerPlayer,stringDelete)


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(array1){                                           
  let arrayNuovo = []                                                   
  let arrayDifferenze = []
  const anno = 2023                                                     
  let indexMinore                                                       
  for(let i=0; i<array1.length; i++){                                   
    arrayNuovo.push(Number(array1[i].Year))                             
  }
  for(let i= 0; i<arrayNuovo.length; i++){
    arrayDifferenze.push(anno-arrayNuovo[i])
  }
  console.log(arrayDifferenze)
  indexMinore = arrayDifferenze.indexOf(Math.min(...arrayDifferenze))
  let titoloRecente = array1[indexMinore].Title
  console.log("il film piu' recente e' "+titoloRecente)
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(array1){
  const numTot= array1.length
  console.log("il numero di film nell'array e' "+ numTot)
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(array1){
  const anniUscita = []
  for(let i=0; i<array1.length; i++){
    anniUscita[i] = array1[i].Year
  }
  console.log(anniUscita)
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(array1){
  const millennioScorso = []
  for(let i=0; i<array1.length; i++){
    if(array1[i].Year > 1899){
      if(array1[i].Year < 2000){
        millennioScorso[i] = array1[i]
      } 
    }
  }
  console.log(millennioScorso)
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(array1){
  let anniSommati =0
  let acc = 0
  let acc2
  for(let i=0; i<array1.length; i++){
    acc2 = array1[i].Year
    acc = parseInt(acc2)
    anniSommati += acc
  }
  console.log(anniSommati)
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(stringa1,array1){
  let ris, tipo ,imdbID , anno , tit 
  let y = 0
  for(let i=0; i<array1.length; i++){
    if(stringa1 === array1[i].Title){
      tit = array1[i].Title
      anno = array1[i].Year
      imdbID = array1[i].imdbID
      ris = "ecco le informazioni del film cercato: "+ tit +" anno uscita: "+ anno + " codice imdb: " + imdbID
      y = 1
    } else {
    }
  }
  if(y === 0){
    ris = "non ci sono film con questo titolo " + stringa1
  }
  console.log(ris)
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(stringa1,array1){
  let match = []
  let unmatch = []
  for(let i= 0; i<array1.length ; i++){
    if(array1[i].Title.includes(stringa1)){
      match.push(array1[i])
    }else{
      unmatch.push(array1[i])
    }
  }
  console.log(match)
  console.log(unmatch)
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(index1,array1){
  if(index1 > -1){
    array1.splice(index1,1)
  }
  console.log(array1)
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selezionaIdContainer(){
  const creaCont = docuemnt.createElement("div")
  creaCont.setAttribute("id" , "container")
  const container = document.getElementById("container")
  return container
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selezionaTuttiITD(){                             
  const creaTD = docuemnt.createElement("td")
  const creaTD2 = docuemnt.createElement("td")
  const creaTD3 = docuemnt.createElement("td")
  const allTD = document.querySelectorAll("td")
  return allTD
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function stampContTD(){
  const creaTD = docuemnt.createElement("td")
  const creaTD2 = docuemnt.createElement("td")
  const creaTD3 = docuemnt.createElement("td")
  creaTD.innerText = "forza"
  creaTD2.innerText = "magica"
  creaTD3.innerText = "roma"
  const allTD = document.querySelectorAll("td")
  for(let i = 0; i<allTD.length ; i++){
    console.log(allTD[i])
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function bgColorLink(){
  const creA = docuemnt.createElement("a")
  const creA2 = docuemnt.createElement("a")
  const creA3 = docuemnt.createElement("a")
  const allA = document.querySelectorAll("a")
  for(let i = 0; i<allA.length ; i++){
    allA[i].style.backgroundColor = "red"
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addLi(){
  const newLi = document.createElement("li")
  const ul = document.getElementById("myList")
  ul.appendChild(newLi)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function removeLi(){
  const ul = document.getElementById("myList")
  const allLi = document.querySelectorAll("li")
  for(let i = 0; i<allLi.length ; i++){
    allLi[i].remove()
  }
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClassToTr(){
  const allTr = document.querySelectorAll("tr")
  for(let i = 0; i<allTr.length ; i++){
    allTr[i].classList.add("test")
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(altezza){
  let righe  
  if(altezza > 0){
    for(let i = 0; i <= altezza-1; i++){
      righe = ""
      for(let y=0; y <= i; y++){
        righe += "*"
      }
      console.log(righe)
    }
  }else{
    console.log("l'altezza deve essere maggiore di 0")
  }
}
const altezzaMezzoAlbero = 3
halfTree(altezzaMezzoAlbero)
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(altezza){
  let spazi, aster  
  if(altezza > 0){
    for(let i = 0; i <= altezza-1; i++){
      spazi = " ".repeat(altezza - i)
      aster = "*".repeat(2*i+1)
      console.log(spazi+aster)
    }
  }else{
    console.log("l'altezza deve essere maggiore di 0")
  }
}
const altezzaAlbero = 3
tree(altezzaAlbero)
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(numeroVerificare){
  if(numeroVerificare <= 1){
    console.log("il numero non e' primo")
    return false
  }
  if(numeroVerificare === 2){
    console.log("il numero e' primo")
    return true
  }
  for(let i = 2; i < numeroVerificare; i++){
    if(numeroVerificare % i == 0){
      console.log("il numero non e' primo")
      return false
    }
  }
  console.log("il numero e' primo")
  return true  
}
const numeroPrimoOno = 3
isItPrime(numeroPrimoOno)

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
const cercaTitolo = "Avengers: Endgame"
const cercaNelTitolo = "Avengers"
const indexRemove = 2
newestMovie(movies)
countMovies(movies)
onlyTheYears(movies)
onlyInLastMillennium(movies)
sumAllTheYears(movies)
searchByTitle(cercaTitolo,movies)
searchAndDivide(cercaNelTitolo,movies)
removeIndex(indexRemove,movies)