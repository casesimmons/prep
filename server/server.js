const express = require('express');
const app = express();
const pool = require('./models');
const path = require('path');

// PORT NUMBER
const PORT = 2222;
const cors = require('cors');
const { urlencoded } = require('body-parser');
const { dir } = require('console');

// PREVENT CORS ERRORS
app.use(cors());
// REQUIRE ALL INTERACTION TO USE/PARSE JSON
app.use(express.json());
// HANDLE FORM DATA CORRECTLY
app.use(express.urlencoded({ extended: true }));
// SERVE STATIC FILES
app.use(express.static('client'));

// app.post(//when we post, take in endpoint, middleware, cb)
// app.get(//when we post, take in endpoint, middleware, cb)
// app.put(//when we post, take in endpoint, middleware, cb)
// app.delete(//when we post, take in endpoint, middleware, cb)

app.listen(PORT, () => {
  console.log('yall listening on 2222');
});
