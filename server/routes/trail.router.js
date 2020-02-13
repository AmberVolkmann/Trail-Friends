const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require ('axios');
const HIKING_API_KEY = process.env.HIKING_API_KEY;

/**
 * GET route template
 */
router.get('/', (req, res) => {
    axios.get(`https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200677409-73ac38262c5f8297edc4c15be59aa795`)
    .then(response => {
        console.log('response.data:', response.data);
        res.send(response.data);
    }).catch(err => {
        console.log('error in trail router', err);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
// router.post('/', (req, res) => {

// });

module.exports = router;