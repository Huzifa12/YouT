const fs = require('fs');
const path = require('path');

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))
    db[model.name] = model;
  });

module.exports = db;