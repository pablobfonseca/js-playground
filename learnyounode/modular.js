const fs   = require('fs');
const path = require('path');

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, (err, filenames) => {
    if(err) return callback(err);

    const filteredList = filenames.filter(filename => path.extname(filename) === `.${extension}`); 

    callback(null, filteredList);
  });
}
