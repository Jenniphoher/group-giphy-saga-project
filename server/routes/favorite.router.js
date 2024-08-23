const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('in get route in favorite.router')
  const sqlText = `
  SELECT * FROM "favorites"
    ORDER BY "id";
  `;

  pool.query(sqlText)
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((dbErr) => {
        console.log('Database error in GET /api/favorites: ', dbErr)
        res.sendStatus(500);
      })
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
  console.log('put router received a request!! ', req.body.categoryId, req.params.id)
  let id = Number(req.params.id);
  let categoryId = req.body.categoryId;
  console.log(id, categoryId);
  const sqlText = `
    UPDATE "favorites" 
      SET "categories_id" = $1
      WHERE "id" = $2;
  `;

  const sqlValues = [categoryId, id];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log('Database error in PUT route ', dbErr);
      res.sendStatus(500);
    })
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
