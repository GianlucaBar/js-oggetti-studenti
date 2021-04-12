// prima parte 
// ============

var studente = {
    'nome': 'Erminio',
    'cognome': 'Airone',
    'età': 48
};

 for ( var chiave in studente){
    console.log('chiave: ' + chiave + ' - valore: ' + studente[chiave]);
    
}

//  seconda parte 
//  ==============

var studenti = [
    studente1 = {
        'nome': 'Erminio',
        'cognome': 'Airone',
        'età': 48
    },

    studente2 = {
        'nome': 'Giacomo',
        'cognome': 'Banano',
        'età': 22
    },

    studente3 = {
        'nome': 'Annibale',
        'cognome': 'Ginepro',
        'età': 18
    },

    studente4 = {
        'nome': 'Geppetto',
        'cognome': 'Di Legno',
        'età': 65
    }
]


// terza parte 
// ============

var newStudente ={
    'nome': prompt('scrivi il nome'),
    'cognome': prompt('scrivi il cognome'),
    'età': parseInt(prompt(" scrivi l'età"))
};

studenti.push(newStudente);

// stampa seconda e terza parte 
for ( var i = 0; i < studenti.length; i++){

    console.log( (i + 1) );

    //  for ( var key in studenti[i]){
    //     if ( key == 'nome' || key == 'cognome'){
    //     console.log( key  + ': ' + studenti[i][key]);
    //     }
    // }

    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
}


