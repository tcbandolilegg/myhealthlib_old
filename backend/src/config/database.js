const { Pool } = require('pg');
const dotenv = require('dotenv');


dotenv.config();

// DB connection
const poll = new Pool({
  connectionString: process.env.DATABASE_URL,
});

poll.on('connect', () => {
  console.log('DB successfully connected!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};