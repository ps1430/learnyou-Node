const http = require('http');
http.get(process.argv[2], (response) => {
  response.on('error',(err) => console.error(err));
  response.setEncoding('utf8');
  response.on('data', data => {
    console.log(data);
  });
});