const express = require('express');

const routes = require('./src/routes/index.js');

require('./src/config/database.js');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('💡 Server started on port 3333');
});
