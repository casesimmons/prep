const express = require('express');
const controller = require('./controller');

// COOKIE PARSER --> RIGHT NOW ONLY THINGS COMING INTO API WOULD GET COOKIE PARSED
const munch = require('cookie-parser');

const router = express.Router();

// PASS IN COOKIE PARSER INVOCATION TO ROUTER
router.use(munch());

// READ ALL ENTRIES IN OUR DB
router.get('/', controller.getData, (req, res) => {
  // SEND BACK ON RESPONSE STATUS, COOKIE, AND JSON DATA FROM QUERY
  res.status(200).cookie('raisin', 7).json(res.locals.info);
});

// CREATE ENTRY IN OUR DB
router.post('/', controller.createEntry, (req, res) => {
  res.status(200).json(res.locals.newEntry);
});

// UPDATE ENTRY IN OUR DB
router.put('/', controller.updateEntry, (req, res) => {
  res.status(200).json(res.locals.updatedEntry);
});

// DELETE ENTRY IN OUR DB
router.delete('/', controller.deleteEntry, (req, res) => {
  res.status(200).json(res.locals.deletedEntry);
});

module.exports = router;
