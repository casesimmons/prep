const db = require('./models');

const controller = {};

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

module.exports = controller;
