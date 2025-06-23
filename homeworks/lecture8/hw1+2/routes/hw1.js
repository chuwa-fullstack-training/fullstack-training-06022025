/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */
const fs = require('fs');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/:dir/:ext', (req,res) => {
    const dir = process.argv[2];
    const ext = '.' + process.argv[3];

    const Dir = path.join(__dirname, '..', dir);

    fs.readdir(Dir, (err, files) =>{
        if (err) {
            res.status(500).json(err);
            return;
        }
        files.forEach(file =>{
            if (path.extname(file) === ext) {
                res.json(file);
            }
        });
    });
})



router.get('/api/parsetime', (req, res) => {
    const iso = req.query.iso;
    
    if (!iso){
        res.status(400).json({error: 'Missing iso query parameter'});
        return;
    }
    const date = new Date(iso);
    let result = {
            hour : date.getUTCHours(),
            minute : date.getUTCMinutes(),
            second : date.getUTCSeconds()
        };
    return res.json(result);
})

router.get('/api/unixtime', (req, res) => {
    const iso = req.query.iso;
    
    if (!iso){
        res.status(400).json({error: 'Missing iso query parameter'});
        return;
    }
    const date = new Date(iso);
    let result = {
            unixtime: date.getTime()
        }
    return res.json(result);
});

module.exports = router;

