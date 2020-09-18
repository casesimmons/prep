const { Pool } = require('pg');
const PG_URI =
  'postgres://waxeluqa:vWdNskeDzBBaoUFG3PVhiVbwQUZKJPov@lallah.db.elephantsql.com:5432/waxeluqa';

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: function (text, params, cb) {
    return pool.query(text, params, cb);
  },
};

// ** CREATE TABLE QUERY
// CREATE TABLE todo (_id SERIAL PRIMARY KEY, item VARCHAR(200) NOT NULL, description VARCHAR(1000), date VARCHAR(200) NOT NULL, status VARCHAR(50));

// ** DATE datatype for date... VARCHAR won't break anything, but....

// ** INSERT VALUES
// INSERT INTO todo (item, description, date, status)
// VALUES ('finish CRUD practice', 'With Codesmith Frens', 'Friday night', 'incomplete'), ('Sunny walk', 'Sunny', 'Saturday night', 'complete'), ('finish CRUD practice', 'With Codesmith Frens', 'Sunday night', 'complete');

// ** VIEW TABLE \dt;
// SELECT * from todo;
