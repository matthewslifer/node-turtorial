//Async functions

const { readFile, writeFile } = require('fs');

console.log("start");

readFile('./content/first.txt', 'utf-8', (err,result) => {
    if(err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err,result) => {
            if(err) {
                console.log(err)
                return;
            }
            console.log("Done with this task")
        })
    })
})

console.log("Starting the next task");

//Doing function async approach, the moment we start a task
//we can offload a task and start with the next one

//Multiple users, once a task is started it can serve multiple users
