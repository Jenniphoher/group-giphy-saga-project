const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// return searches
router.get('/', (req, res) => {
    const random = String(req.query.q);
    const api_key = process.env.GIPHY_API_KEY;
    const limitNum = 6;
    console.log('This is req.random:', random);

    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${random}&limit=${limitNum}`)
    .then((response) => {
        console.log('Server random giph data:', response.data);
        res.send(response.data);
    }) .catch((err) => {
        console.log('Server error:', err);
        res.sendStatus(500);
    })

});

module.exports = router;