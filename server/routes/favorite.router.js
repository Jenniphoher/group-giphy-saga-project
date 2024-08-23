const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(201);
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
