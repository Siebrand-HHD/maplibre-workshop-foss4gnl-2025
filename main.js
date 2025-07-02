console.log("Ook hallo wereld vanaf Javascript!");

// docs:
// https://github.com/search?q=maplibre&type=repositories
// https://docs.geostandaarden.nl/serv/vt/
// import * as maplibregl from "https://esm.sh/maplibre-gl";
import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    // style: 'https://demotiles.maplibre.org/style.json', // style URL
    // style: 'https://tiles.openfreemap.org/styles/liberty',
    style: 'assets/style.json',
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});