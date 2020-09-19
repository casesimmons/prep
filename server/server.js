const express = require('express');
const app = express();
const pool = require('./models');
const path = require('path');

// PORT NUMBER
const PORT = 2222;
// REQUIRE CORS IN CASE OF API CALLS
const cors = require('cors');
// IMPORT URLENCODED FROM BODY-PARSER
const { urlencoded } = require('body-parser');
// DONT KNOW WHAT THIS IS
const { dir } = require('console');

// IMPORT ROUTER FROM ROUTES.JS
const router = require('./routes.js');

// PREVENT CORS ERRORS
app.use(cors());
// REQUIRE ALL INTERACTION TO USE/PARSE JSON
app.use(express.json());
// HANDLE FORM DATA CORRECTLY
app.use(express.urlencoded({ extended: true }));

// SERVE STATIC FILES
app.use(express.static('client'));

// app.post(//when we post, take in endpoint, middleware, cb)
app.use('/api', router);
// app.put(//when we post, take in endpoint, middleware, cb)
// app.delete(//when we post, take in endpoint, middleware, cb)

// GLOBAL CATCH ALL HANDLER
app.use('/', (err, req, res, next) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log('Listening on Port 2222');
});
