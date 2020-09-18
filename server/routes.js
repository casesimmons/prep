const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.getData, (req, res) => {
  // console.log(res.locals.info);
  res.status(200).json(res.locals.info);
});

module.exports = router;
