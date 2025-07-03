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
    center: [5.66342, 51.97374], // starting position [lng, lat] 51.97838,5.64525
    zoom: 13 // starting zoom
});
map.addSource('wandeling', {
    type: 'geojson',
    // data: 'https://github.com/siebrand-hhd/maplibre-workshop-foss4gnl-2025/blob/main/assets/wandeling.geojson',
    data: './assets/wandeling.geojson'
});

    map.addLayer({
        id: 'wandeling',
        type: 'line',
        source: 'wandeling',
        paint: {
            "line-color": [
                "interpolate",
                ["exponential", 2.5],
                ["zoom"],
                11,
                "rgb(229, 53, 176)",
                18,
                "rgb(255, 197, 241)"
            ],
            "line-dasharray": [
                "step",
                ["zoom"],
                ["literal", [3, 1]],
                16,
                ["literal", [2, 1]],
                18,
                ["literal", [2, 0]]
            ],
            "line-width": [
                "interpolate",
                ["exponential", 1.5],
                ["zoom"],
                11,
                2.5,
                20,
                12
            ]
        },
    });