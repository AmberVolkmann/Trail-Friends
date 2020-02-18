const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require ('axios');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
            
           
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in post router');
    const newContribution = req.body;
    console.log(newContribution)
    const queryText = `INSERT INTO "contributions" ("created_by", "comment", "date_submitted", "trail_id", "latitude", "longitude")
    VALUES ($1, $2, $3, $4, $5, $6);`;
    const queryValues = [
        newContribution.createdBy,
        newContribution.comment,
        newContribution.dateSubmitted,
        newContribution.trailId,
        newContribution.latitude,
        newContribution.longitude,
    ];
    pool.query(queryText, queryValues)
    .then(()=> {
        res.sendStatus(201);
        console.log(queryValues)
    }).catch((err) => {
        console.log('Error in router.post on shelf router', err);
        res.sendStatus(500);
    })
});

module.exports = router;