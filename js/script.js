$(document).ready(
  function (){
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    // - Creo un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
    var objStudente = {
      "Nome" :"Marco",
      "Cognome" : "Prosperi",
      "Età" : 30
    };

    // Stampo a schermo attraverso il for in tutte le proprietà.
    for (var key in objStudente) {
      console.log("Chiave: " + key + " - Valore: " + objStudente[key]);
      //stampo su html con handlebars
      var oggettoStudente = { oggettoStudente: "Chiave: " + key + " - Valore: " + objStudente[key] };
      var oggettoStudenteHtml = template(oggettoStudente);
      $('.oggetto_studente').append(oggettoStudenteHtml);
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
      console.log("Nome: " + singoloStudente.Nome);
      console.log("Cognome: " + singoloStudente.Cognome);
      //stampo su html con handlebars
      var studenti = { studenti: "Nome: " + singoloStudente.Nome + " Cognome: " + singoloStudente.Cognome};
      var studentiHtml = template(studenti);
      $('.studenti').append(studentiHtml);
    };

    // Do la possibilità all’utente attraverso 3 prompt di
    // aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
    var nuovoNome = prompt("dimmi il tuo Nome");
    var nuovoCognome = prompt("dimmi il tuo Cognome");
    var nuovaEta = parseInt(prompt("dimmi la tua età"));

    arrayStudenti.push({"Nome": nuovoNome, "Cognome": nuovoCognome, "Età": nuovaEta});
    console.log(arrayStudenti);
    //stampo su html con handlebars
    var nuovoStudente = { nuovoStudente: "Nome: " + nuovoNome + " Cognome: " + nuovoCognome};
    var nuovoStudenteHtml = template(nuovoStudente);
    $('.nuovo_studente').append(nuovoStudenteHtml);
  }
);
