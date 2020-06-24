$(document).ready(
  function (){
    // - Creo un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
    var objStudente = {
      "Nome" :"Marco",
      "Cognome" : "Prosperi",
      "Età" : 30
    };

    // Stampo a schermo attraverso il for in tutte le proprietà.
    for (var key in objStudente) {
      console.log("Chiave: " + key + " - Valore: " + objStudente[key]);
    };

    // Creo un array di oggetti di studenti.
    var arrayStudenti = [
      {
        "Nome" :"Marco",
        "Cognome" : "Prosperi",
        "Età" : 30
      },
      {
        "Nome" :"Mario",
        "Cognome" : "Rossi",
        "Età" : 50
      },
      {
        "Nome" :"Paolo",
        "Cognome" : "Bianchi",
        "Età" : 25
      }
    ];

    // Ciclo su tutti gli studenti e stampo per ognuno nome e cognome
    for (var i = 0; i < arrayStudenti.length; i++) {
      var singoloStudente = arrayStudenti[i];
      console.log(singoloStudente.Nome);
      console.log(singoloStudente.Cognome);
    };



    // Do la possibilità all’utente attraverso 3 prompt di
    // aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  }
);
