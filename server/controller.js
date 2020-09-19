const db = require('./models');

const controller = {};

// GET ALL FROM DB MIDDLEWARE
controller.getData = (req, res, next) => {
  const queryText = `SELECT * FROM todo;`;
  db.query(queryText)
    .then((dbResult) => {
      res.locals.info = dbResult.rows;
      console.log('data.rows: ', dbResult.rows);
      return next();
    })
    .catch((err) => {
      console.log('err: ');
      return next(err);
    });
};

// CREATE NEW ENTRY IN DB MIDDLEWARE
controller.createEntry = (req, res, next) => {
  // DESTRUCTURE item, info, date, status FROM REQ.BODY
  const { item, description, date, status } = req.body;
  // STORE VARIABLES FROM REQ.BODY IN AN ARRAY
  const values = [item, description, date, status];
  // QUERY WITH VALUES AS PARAMERTIZED VARIABLES
  const queryText = `INSERT INTO todo (item, description, date, status) VALUES ($1, $2, $3, $4) RETURNING *;`;
  // QUERY DB
  db.query(queryText, values)
    .then((dbResult) => {
      res.locals.newEntry = dbResult.rows[0];
      console.log('create entry: ', dbResult.rows[0]);
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

// UPDATE ENTRY IN DB MIDDLEWARE
controller.updateEntry = (req, res, next) => {
  // DESTRUCTURE _id, item, info, date, status FROM REQ.BODY
  const { _id, item, description, date, status } = req.body;
  // STORE VARIABLES FROM REQ.BODY IN AN ARRAY
  const values = [_id, item, description, date, status];
  // QUERY WITH VALUES AS PARAMERTIZED VARIABLES
  const queryText = `UPDATE todo SET item = $2, description = $3, date = $4, status = $5 WHERE _id = $1 RETURNING *;`;
  // QUERY DB
  db.query(queryText, values)
    .then((dbResult) => {
      res.locals.updatedEntry = dbResult.rows[0];
      console.log('updated entry: ', dbResult.rows[0]);
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

// DELETE ENTRY IN DB MIDDLEWARE
controller.deleteEntry = (req, res, next) => {
  // DESTRUCTURE _id FROM REQ.BODY
  const { _id } = req.body;
  // STORE _id IN VALUES ARRAY
  const values = [_id];
  // QUERY FOR DELETE
  const queryText = `DELETE FROM todo WHERE _id = $1 RETURNING *;`;
  db.query(queryText, values)
    .then((dbResult) => {
      res.locals.deletedEntry = dbResult.rows[0];
      console.log('deleted entry: ', dbResult.rows[0]);
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = controller;
