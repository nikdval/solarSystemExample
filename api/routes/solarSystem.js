var express = require("express");
const { request } = require("../app");
var router = express.Router();

var CelestialBody = require('../models/celestialBody');

router.get("/", function (req, res, next) {
    const host = req.headers.host
    getPlanets(host)
    .then((data)=>{
        res.send(data);
    })
    .catch(next);   
})

router.get("/:planet", function (req, res, next) {
    const host = req.headers.host
    getPlanet(req.params.planet, host)
    .then((data)=>{
        res.send(data);
    })
    .catch(next); 
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
async function getPlanets(host) {
    //Query DB in future
    createImageUri(host);
    return [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]
}


/**
 * GET a planet
 * @param {string} name -  planet name 
 * @returns {object}
 */
async function getPlanet(name, host) {
    //Query DB in future

    switch (name) {
        case "mercury":
            mercury.getImageUri(host);
            return mercury;
        case "venus":
            venus.getImageUri(host);
            return venus;
        case "earth":
            earth.getImageUri(host);
            return earth;
        case "mars":
            mars.getImageUri(host);
            return mars;
        case "jupiter":
            jupiter.getImageUri(host);
            return jupiter;
        case "saturn":
            saturn.getImageUri(host);
            return saturn;
        case "uranus":
            uranus.getImageUri(host);
            return uranus;
        case "neptune":
            neptune.getImageUri(host);
            return neptune;
        default:
            return "This planet doesn't exist";
    }
}

module.exports = router;