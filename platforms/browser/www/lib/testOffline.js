//Afficher la division Carte
$('#carte').addClass('hidden');

$("#carteBtn").click(function() {
    if (navigator.onLine === true) {
        $('#couche').removeClass('hidden');
        $('#carte').removeClass('hidden');
        $('#accueil').addClass('hidden');
    }
    else {
        alert("Vous n'avez pas d'accès internet")
    }
});


//Afficher la division Mes Cartes
$("#mesCartesBtn").click(function() {
    $('#mesCartes').removeClass('hidden');
    $('#accueil').addClass('hidden');
});

//Afficher la division Accueil
$("#retour1").click(function() {
    $('#couche').addClass('hidden');
    $('#carte').addClass('hidden');
    $('#accueil').removeClass('hidden');
});

//Afficher la division Accueil
$("#retour2").click(function() {
    $('#mesCartes').addClass('hidden');
    $('#accueil').removeClass('hidden');
});