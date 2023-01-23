// JavaScript is synchronous and single threaded
// Event loop registers the call back
// Requests -> Register CB -> Complete -> execute callback

// First example

// const {readFile} = require('fs');

// console.log('started a first task');

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result);
//     console.log('completed first task')
// });
// console.log('starting next task');


//Second Example

//Started operating system process
// console.log('first');
// setTimeout(() => {
//     console.log('second')
// },0)
// console.log('third');
//completed and exited operating system process

// Third Example
// setInterval(() => {
//     console.log('hello world')
// }, 2000)
// console.log("third")
// process stays alive unless kill process using CONTROL + C, unexpected error

// Fourth Example
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end("Hello World")
});

server.listen(3000, () => {
    console.log('Server listening on port : 3000....');
})
