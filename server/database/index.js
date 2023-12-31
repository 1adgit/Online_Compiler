const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (err) => {
  console.error(`🚫 → ${err.message}`);
});

module.exports = mongoose.connection;