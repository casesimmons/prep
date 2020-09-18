const { Pool } = require('pg');
const PG_URL =
  'postgres://waxeluqa:vWdNskeDzBBaoUFG3PVhiVbwQUZKJPov@lallah.db.elephantsql.com:5432/waxeluqa';

const pool = new Pool({ connectString: PG_URL });

module.exports = {
  query: function (text, params, cb) {
    return pool.query(text, params, cb);
  },
};
