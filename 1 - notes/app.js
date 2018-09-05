const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes.js')

console.log('Starting app')

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
            notes.printNote(note)
        }
        else {
            console.log('\n------------\nNote already exists')
        }
        break;

    case 'list':
        console.log('\nNotes list')
        notes.getAll().forEach(note => notes.printNote(note))
        break;

    case 'read':
        note = notes.getNote(argv.title)
        if (note) {
            console.log('\nNote read')
            notes.printNote(note)
        }
        else {
            console.log('\n------------\nNote not found')
        }
        break;

    case 'remove':
        let noteRemoved = notes.removeNote(argv.title)
        console.log('\n------------')
        console.log(noteRemoved ? 'Note was removed' : 'Note not found')
        break;

    default:
        console.log('\n------------')
        console.log('Command not recognized')
        break;
}


