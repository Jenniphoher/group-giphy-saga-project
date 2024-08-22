const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites".id, "favorites".image_url, "categories".name'
    FROM "favorites"
    LEFT JOIN "categories" ON "favorites".categories_id = "categories".id
    ORDER BY "favorites".id DESC`
  pool.query(queryText)
    .then((result) => {
    res.send(result.rows);
  })
    .catch((error) => {
    console.log('YO! Error SELECT favorites', error);
    res.sendStatus(500);
  });
  })

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(201);
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
