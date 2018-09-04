console.log('Starting app')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

// getting the yargs arguments object
const argv = yargs.argv
const command = argv._[0]

console.log('Command: ', command)
console.log('Yargs', argv)

switch (command) {
    case 'add':
        notes.addNote(argv.title, argv.body)
        break;
    case 'list':
        notes.getAll()
        break;
    case 'read':
        notes.getNote(argv.title)
        break;
    case 'remove':
        notes.removeNote(argv.title)
        break;
    default:
        console.log('Command not recognized')
        break;
}


