//Sync

const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,
{flag: 'a'});

console.log('done with this task');
console.log('starting this next one')

//Javascript is reading this code synchronsly, line by line
//JS is reading the code line by line, makes it so that if there is
//multiple users only one task can be completed at a time
