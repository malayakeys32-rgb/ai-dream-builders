const fs = require('fs');

module.exports = {
  log(error) {
    fs.appendFileSync('errors.log', error + '\n');
  }
};
