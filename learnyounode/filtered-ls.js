const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const extension = process.argv[3];

fs.readdir(folder, (err, list) => {
  if(err) return console.log(err);

  const filtered = list.filter(filename => path.extname(filename) === `.${extension}`);
  filtered.forEach(filename => console.log(filename));
});
