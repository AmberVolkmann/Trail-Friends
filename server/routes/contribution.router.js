const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require ('axios');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = 'SELECT * FROM "contributions";'
    console.log('in shelf router.get')
    pool.query(queryText)
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in contribution GET', error)
            res.sendStatus(500);
        })
            
           
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in post router');
    const newContribution = req.body;
    console.log(newContribution)
    const queryText = `INSERT INTO "contributions" ("created_by", "comment", "date_submitted", "trail_id", "latitude", "longitude")
    VALUES ($1, $2, now(), $3, $4, $5);`;
    const queryValues = [
        newContribution.createdBy,
        newContribution.comment,
        // newContribution.dateSubmitted,
        newContribution.trailId,
        newContribution.latitude,
        newContribution.longitude,
    ];
    pool.query(queryText, queryValues)
    .then(()=> {
        res.sendStatus(201);
        console.log(queryValues)
    }).catch((err) => {
        console.log('Error in router.post on contribution router', err);
        res.sendStatus(500);
    })
});


router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.user.id)
    const id = req.params.id
    const user_id = req.params.created_by
    const loggedin_user = req.user.id
    console.log('in delete route. the id is:', id)
    let queryText = `DELETE FROM "contributions" 
                    WHERE "id" = $1`;
    pool.query(queryText, [id])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('ERROR IN / DELETE', error);
            res.sendStatus(500);
        });
    // if (loggedin_user == user_id) {
    //     const queryText = 'DELETE FROM "contributions" WHERE "id" = $1'
    //     pool.query(queryText, [id])
    //     .then(() => {res.sendStatus(200)})
    //     .catch((err) => {
    //     console.log(err)
    //     res.sendStatus(500)
    // })
    // } else {
    //     res.sendStatus(403)
    //     console.log('error deleting on the router')
    // }
});

module.exports = router;