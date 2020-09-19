const db = require('./models');

const controller = {};

// GET ALL FROM todo MIDDLEWARE
controller.getData = (req, res, next) => {
  const queryText = `SELECT * FROM todo;`;
  db.query(queryText)
    .then((data) => {
      res.locals.info = data.rows;
      console.log('data.rows: ', data.rows);
      return next();
    })
    .catch((err) => {
      console.log('err: ');
      return next(err);
    });
};

// CREATE NEW ENTRY in todo MIDDLEWARE
controller.createEntry = (req, res, next) => {
  // DESTRUCTURE item, info, date, status FROM REQ.BODY
  const { item, description, date, status } = req.body;
  // STORE VARIABLES FROM REQ.BODY IN AN ARRAY
  const values = [item, description, date, status];
  // QUERY WITH VALUES AS PARAMERTIZED VARIABLES
  const queryText = `INSERT INTO todo (item, description, date, status) VALUES ($1, $2, $3, $4) RETURNING *;`;
  // QUERY DB
  db.query(queryText, values)
    .then((data) => {
      res.locals.newEntry = data.rows[0];
      console.log('create entry: ', data.rows);
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = controller;
