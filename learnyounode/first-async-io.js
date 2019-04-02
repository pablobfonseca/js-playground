const fs   = require('fs');

const file = process.argv[2];

fs.readFile(file, 'utf8', (err, fileContents) => {
  if (err) {
    return console.log(err);
  }

  return console.log(fileContents.split("\n").length - 1);
});
