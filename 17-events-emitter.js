const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) => {
    console.log(`data recieved: user: ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'john', 34)


// order of the functions matter, listen for an event and then emit it
// Can pass the argument when we are emitting an event
