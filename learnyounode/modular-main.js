const filterLs  = require('./modular');

const folder    = process.argv[2];
const extension = process.argv[3];

function log(err, filenames) {
  if(err) return console.log(err);

  filenames.forEach(filename => console.log(filename));
}

filterLs(folder, extension, log);
