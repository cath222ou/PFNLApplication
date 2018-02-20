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
    // });

    }
    else {
        alert("Vous n'avez pas d'accès internet")
    }
});


//Afficher la division Mes Cartes
$("#mesCartesBtn").click(function() {
    $('#mesCartes').removeClass('hidden');
    $('#mesCartesHorsligne').removeClass('hidden');
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
    $('#mesCartesHorsligne').addClass('hidden');
    $('#accueil').removeClass('hidden');
});

////testt////
// if (typeof(Number.prototype.toRad) === "undefined") {
//     Number.prototype.toRad = function() {
//         return this * Math.PI / 180;
//     }
// }
// function getTileURL(lat, lon, zoom) {
//     var xtile = parseInt(Math.floor( (lon + 180) / 360 * (1<<zoom) ));
//     var ytile = parseInt(Math.floor( (1 - Math.log(Math.tan(lat.toRad()) + 1 / Math.cos(lat.toRad())) / Math.PI) / 2 * (1<<zoom) ));
//     return "" + zoom + "/" + xtile + "/" + ytile;
// }
//
//
// map.on('click', function (e) {
//     url = getTileURL(e.coordinate[0].lat, e.coordinate[1].lng, map.getView().getZoom())
//     console.log(url);
//     alert(url);
// });
//////

function getAllOSMTiles(coord1, coord2, nivZoom, sourceTile) {
    var tileUrlFunction = sourceTile.getTileUrlFunction()
    out1 = getTileURL(coord1, nivZoom);
    out2 = getTileURL(coord2, nivZoom);

    if (out1[1] > out2[1]) {
        outTmp1 = out1[1];
        out1[1] = out2[1];
        out2[1] = outTmp1;
    }
    if (out1[2] > out2[2]) {
        outTmp1 = out1[2];
        out1[2] = out2[2];
        out2[2] = outTmp1;
    }

    while (out1[1] <= out2[1]) {
        var resetLoop = out1[2]
        while (out1[2] <= out2[2]) {
            var tileURL = tileUrlFunction([out1[0], out1[1], -out1[2] - 1], ol.has.DEVICE_PIXEL_RATIO, ol.proj.get('EPSG:3857'));
            var uri = encodeURI(tileURL)
            remoteTilesOSM.push(uri)
            out1[2]++;
        }
        out1[2] = resetLoop
        out1[1] += 1;
    }
}

$("#download").click(function() {
    console.log(map.getView())
})


// $("#download").click(function() {
//     map.getView().setZoom(map.getView().getZoom()-1);
//     var source = OSM.getSource();
//     var tileUrlFunction = source.getTileUrlFunction();
//
//
//
//     });
//
//     // source.on('tileloadend', function (evt) {
//     //     console.log(evt.tile)
//     //     source_url = tileUrlFunction(evt.tile.getTileCoord(), 1, ol.proj.get('EPSG:3857'));
//     //     console.log(source_url);
//     //     localStorage.setItem('layerUrl' , source_url );
//         // console.log('local'+ localStorage.getItem('layerUrl'));
//
//         // evt.preventDefault(true);
//         // console.log('allo'+preventDefault)
//
//     // });
//
//     // source.on('tileloadend', function (event) {
//     //     event.stopPropagation()
//     // })
// });