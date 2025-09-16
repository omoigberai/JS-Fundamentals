// 7-multi_c.js
const occurrences = Number(process.argv[2]);

if (!Number.isInteger(occurrences) || isNaN(occurrences)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < occurrences; i++) {
    console.log('C is fun');
  }
}