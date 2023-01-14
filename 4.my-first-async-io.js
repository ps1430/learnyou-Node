const fs = require('fs');
fs.readFile(process.argv[2],(err,contents)=>{
  if (err) return console.log(err);
  const result= contents.toString().split('\n').length-1;
  console.log(result);
});