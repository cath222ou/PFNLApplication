//Afficher la division Carte
$('#carte').addClass('hidden');

$("#carteBtn").click(function() {
    if (navigator.onLine === true) {
        $('#couche').removeClass('hidden');
        $('#carte').removeClass('hidden');
        $('#accueil').addClass('hidden');


        // console.log(OSM.getSource());

        // var source = map.getLayers().item(0).getSource();
        // var tileUrlFunction = source.getTileUrlFunction();
        // source.on('tileloadend', function (evt) {
        //     console.log(tileUrlFunction(evt.tile.getTileCoord(), 1, ol.proj.get('EPSG:3857')));
        // });


    // var source = OSM.getSource();
    //
    // var tileUrlFunction = source.getTileUrlFunction();
    //
    // source.on('tileloadend', function (evt) {
    //     source_url = tileUrlFunction(evt.tile.getTileCoord(), 1, ol.proj.get('EPSG:3857'));
    //     console.log(source_url);
    //     localStorage.setItem('layerUrl' , source_url );
    //     console.log('local'+ localStorage.getItem('layerUrl'));
    // });





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



