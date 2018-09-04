console.log('Starting app')

const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

// getting the yargs arguments object
const argv = yargs.argv
const command = argv._[0]

console.log('Command: ', command)

let note = undefined
switch (command) {
    case 'add':
        note = notes.addNote(argv.title, argv.body)
        if (note) {
            console.log('\nNote created')
            console.log('------------')
            console.log(`Title: ${note.title}`)
            console.log(`Body: ${note.body}`)
        }
        else {
            console.log('Note already exists!')
        }
        break;

    case 'list':
        notes.getAll()
        break;

    case 'read':
        note = notes.getNote(argv.title)
        if (note) {
            console.log('\nNote read')
            console.log('------------')
            console.log(`Title: ${note.title}`)
            console.log(`Body: ${note.body}`)
        }
        else {
            console.log('Note already exists!')
        }
        break;

    case 'remove':
        notes.removeNote(argv.title)
        break;

    default:
        console.log('Command not recognized')
        break;
}


