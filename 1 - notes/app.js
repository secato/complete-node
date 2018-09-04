console.log('Starting app')

const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

// getting the yargs arguments object
const argv = yargs.argv
const command = argv._[0]

console.log('Command: ', command)

switch (command) {
    case 'add':
        const note = notes.addNote(argv.title, argv.body)
        if(note)
            console.log('Note created - ', note.title)
        else
            console.log('Note already exists!')
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


