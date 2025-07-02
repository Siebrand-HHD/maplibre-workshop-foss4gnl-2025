console.log("Ook hallo wereld vanaf Javascript!");

// import * as maplibregl from "https://esm.sh/maplibre-gl";
import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    // style: 'https://demotiles.maplibre.org/style.json', // style URL
    style: 'https://tiles.openfreemap.org/styles/liberty',
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});