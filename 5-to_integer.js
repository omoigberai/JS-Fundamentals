#!/usr/bin/node

const arg = process.argv[2];        // Get the first argument
const num = parseInt(arg);          // Convert it to an integer

if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num);
}