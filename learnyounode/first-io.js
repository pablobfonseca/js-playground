const fs       = require('fs');

const file     = process.argv[2];
const buffer   = fs.readFileSync(file, 'utf8');
const newLines = buffer.split("\n");

console.log(newLines.length - 1);
