const numbers = process.argv.splice(2);
const total = numbers.reduce((total, number) => {
  return total + Number(number);
}, 0) 

console.log(total);
