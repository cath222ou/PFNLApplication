//Afficher la division Carte

$("#carteBtn").click(function() {
    if (navigator.onLine === true) {
        $('#carte').toggleClass('hidden');
        $('#map').toggleClass('hidden');
        $('#accueil').toggleClass('hidden');
    }
    else {
        alert("Vous n'avez pas d'accès internet")
    }
});


//Afficher la division Mes Cartes
$("#mesCartesBtn").click(function() {
    $('#mesCartes').toggleClass('hidden');
    $('#accueil').toggleClass('hidden');
});

//Afficher la division Accueil
$("#retour1").click(function() {
    $('#carte').toggleClass('hidden');
    $('#map').toggleClass('hidden');
    $('#accueil').toggleClass('hidden');
});

//Afficher la division Accueil
$("#retour2").click(function() {
    $('#mesCartes').toggleClass('hidden');
    $('#accueil').toggleClass('hidden');
});