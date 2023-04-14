#!/usr/bin/node

const arg = parseInt(argv[2], 10);

const myVar = 'C is fun';

if (isNaN(arg)) {
  console.log('Missing number of occurrences');
} else {
  for (i = 0; i <= arg; i++) {
    console.log(myVar);
  }
}
