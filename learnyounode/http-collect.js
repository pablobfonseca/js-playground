const http = require('http');
const bl   = require('bl');
const url  = process.argv[2];

http.get(url, (req) => {
  req.pipe(bl((err, data) => {
    if (err) return console.log(err);

    data = data.toStrin();
    console.log(data.length);
    console.log(data);
  }));
}).on("error", console.error);
