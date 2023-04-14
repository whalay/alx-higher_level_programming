#!/usr/bin/node

const arg = parseInt(process.argv[2], 10);

const myVar = 'C is fun';

if (isNaN(arg)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i <= arg; i++) {
    console.log(myVar);
  }
}
