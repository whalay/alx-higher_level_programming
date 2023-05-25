#!/usr/bin/node

const read_file = require('fs');

read_file.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
