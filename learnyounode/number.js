const fs = require('fs');
let myNumber;

function increaseNumber(err, fileContent) {
  if(err) return console.log(err);

  myNumber = parseInt(fileContent);
  myNumber++;
  console.log(myNumber);
}

function addOne() {
  fs.readFile('number.txt', increaseNumber);
}

addOne();
