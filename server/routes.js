const express = require('express');
const controller = require('./controller');

// COOKIE PARSER --> RIGHT NOW ONLY THINGS COMING INTO API WOULD GET COOKIE PARSED
const munch = require('cookie-parser');

const router = express.Router();

// PASS IN COOKIE PARSER INVOCATION TO ROUTER
router.use(munch());

// ROUTE GET REQUEST WITH MIDDLEWARE GETDATA + ADD COOKIES
router.get('/', controller.getData, (req, res) => {
  // COOKIE TEST
  console.log(req.cookies);
  const something = req.cookies;
  if (something) console.log('grandma is the best');

  // COULD WRITE FUNCTION HERE TO GENERATE RANDOM ID FOR COOKIE

  // SEND BACK ON RESPONSE STATUS, COOKIE, AND JSON DATA FROM QUERY
  res.status(200).cookie('raisin', 7).json(res.locals.info);
});

module.exports = router;
