// readFileSync :is a methodis used to read the file and return its content
//we can read files in a synchronous(at the same time)
const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./check/first.txt', 'utf8'); // this is used to read file
const sec = readFileSync('./check/sec.txt', 'utf8');
console.log(first);
//
writeFileSync('./check/result.txt',`hello this is result of:  ${first},${sec}`)// this method is used to write or creat file in file sytem
const result=readFileSync('./check/result.txt','utf8');
console.log(result);