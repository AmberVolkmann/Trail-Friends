const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require ('axios');
const HIKING_API_KEY = process.env.HIKING_API_KEY;
const {rejectUnautenticated} = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/', (req, res) => {
    axios.get(`https://www.hikingproject.com/data/get-trails?lat=47.750200&lon=-90.335620&maxDistance=100&key=200677409-73ac38262c5f8297edc4c15be59aa795`)
    .then(response => {
        // console.log('response.data:', response.data);
        res.send(response.data);
    }).catch(err => {
        console.log('error in trail router', err);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.put('/', (req, res) => {
    console.log('in post trail router');
    console.log('req.user.id', req.user.id);

    const current_trail = req.body.trailKey;
    debugger;
    console.log('req.body', req.body);

    
    const queryText = `UPDATE "user" SET "current_trail" = $1 WHERE "id" = $2;`;
    const queryValues = [
        current_trail,
        req.user.id
    ];
    pool.query(queryText, queryValues)
    .then(()=> {
        res.sendStatus(201);
        console.log(queryValues)
    }).catch((err) => {
        console.log('Error in router.put on trail router', err);
        res.sendStatus(500);
    })

});

module.exports = router;