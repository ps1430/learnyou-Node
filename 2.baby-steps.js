const  num = process.argv.slice(2);
const sum = num.reduce((acc,val) => {
  return acc+val;
},0);
console.log(sum);