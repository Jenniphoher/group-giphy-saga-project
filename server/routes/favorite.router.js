const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {

  const favGiph = req.body.image_url.image_url;
  console.log('req.body:', req.body);
  console.log('This is post body:', favGiph);
  let queryText = `
  INSERT INTO "favorites"
    ("image_url")
    VALUES
    ($1)
    `;

    let queryValues = [favGiph];

    pool.query(queryText, queryValues)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('Error adding Faveeeee:', error)
    })
  
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
