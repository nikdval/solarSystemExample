var express = require("express");
const { request } = require("../app");
var router = express.Router();

var CelestialBody = require('../models/celestialBody');

router.get("/", function (req, res, next) {
    // GET url for images
    const host = req.headers.host
    createImageUri(host);

    const planents = getPlanets(host);
    res.send(planents);
    
})

router.get("/:planet", function (req, res, next) {
    const requestPlanet = getPlanet(req.params.planet)
    res.send(requestPlanet);
})

// Planet instances - REMOVE after connect with DB
const mercury = new CelestialBody("Mercury", "Mercury_in_true_color.jpg", 4.503, "3.285 × 10^23");
const venus = new CelestialBody("Venus", "Venus_from_Mariner_10.jpg", 4.503, "4.867 × 10^24");
const earth = new CelestialBody("Earth", "The_Earth_seen_from_Apollo_17.jpg", 4.543, "5.972 × 10^24");
const mars = new CelestialBody("Mars", "440px-OSIRIS_Mars_true_color.jpg", 4.603, "6.39 × 10^23");
const jupiter = new CelestialBody("Jupiter", "Jupiter_and_its_shrunken_Great_Red_Spot.jpg", 4.603, "1.898 × 10^27");
const saturn = new CelestialBody("Saturn", "Saturn_and_its_3_moons.jpg", 4.503, "5.683 × 10^26");
const uranus = new CelestialBody("Uranus", "Uranus_true_colour.jpg", 4.503, "8.681 × 10^25");
const neptune = new CelestialBody("Neptune", "Neptune_-_Voyager_2_(29347980845)_flatten_crop.jpg", 4.503, "1.024 × 10^26");


/**
 * Generates url for the images to be used in img src
 * @param {string} host 
 */
 function createImageUri(host){
    mercury.getImageUri(host);
    venus.getImageUri(host);
    earth.getImageUri(host);
    mars.getImageUri(host);
    jupiter.getImageUri(host);
    saturn.getImageUri(host);
    uranus.getImageUri(host);
    neptune.getImageUri(host);
}

/**
 * GET all planets
 * @returns array
 */
function getPlanets() {
    //Query DB in future

    return [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]
}


/**
 * GET a planet
 * @param {string} name -  planet name 
 * @returns {object}
 */
function getPlanet(name) {
    //Query DB in future

    switch (name) {
        case "mercury":
            return mercury;
        case "venus":
            return venus;
        case "earth":
            return earth;
        case "mars":
            return mars;
        case "jupiter":
            return jupiter;
        case "saturn":
            return saturn;
        case "uranus":
            return uranus;
        case "neptune":
            return neptune;
        default:
            return "This planet doesn't exist";
    }
}

module.exports = router;