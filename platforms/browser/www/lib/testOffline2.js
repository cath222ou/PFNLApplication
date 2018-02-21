$("#download").click(function() {

        map.once('postcompose', function(event) {
            var canvas = event.context.canvas;
            console.log(canvas.toBlob)
            var quality = 1 // 0 to 1

            canvas.toBlob(function(blob){
                saveAs(blob, 'aa.jpg');
            }, 'image/jpeg', quality);

            // canvas.toBlob(function(blob) {
            //             saveAs(blob, 'map.png');
            //         });
            // if (navigator.msSaveBlob) {
            //     navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
            // }
            // else {
            //     canvas.toBlob(function(blob) {
            //         saveAs(blob, 'map.png');
            //     });
            // }
        });
        map.renderSync();

});






// var osm = new OpenLayers.Layer.OSM();
//
// var graphic = new OpenLayers.Layer.Image(
//     'Image',
//     'http://belocalat.com/wp-content/plugins/openlayers/data/baselayer-img1.png',
//     new OpenLayers.Bounds(27.418100,35.771100,28.388000,36.558500),
//     new OpenLayers.Size(800,255),
//     {numZoomLevels: 3}
// );
//
// map.addControl(new OpenLayers.Control.LayerSwitcher());
// map.addLayers([osm, graphic]);
// map.zoomToExtent(new OpenLayers.Bounds(27.418100,35.771100,28.388000,36.558500));