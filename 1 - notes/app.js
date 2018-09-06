const notes = require('./notes')
const args = require('./args')

const argv = args.argv
const command = argv._[0]

switch (command) {
    case 'add':
        let noteAdded = notes.addNote(argv.title, argv.body)
        if (noteAdded) {
            console.log('\nNote created')
            notes.printNote(noteAdded)
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
        let note = notes.getNote(argv.title)
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
        args.showHelp()
        break;
}


