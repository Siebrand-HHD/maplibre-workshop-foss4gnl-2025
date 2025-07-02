console.log("Ook hallo wereld vanaf Javascript!");

// docs:
// https://github.com/search?q=maplibre&type=repositories
// https://docs.geostandaarden.nl/serv/vt/
// import * as maplibregl from "https://esm.sh/maplibre-gl";
import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";
import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    // style: 'https://demotiles.maplibre.org/style.json', // style URL
    // style: 'https://tiles.openfreemap.org/styles/liberty',
    style: 'assets/style.json',
    center: [51.97374, 5.66342], // starting position [lng, lat]
    zoom: 1 // starting zoom
});